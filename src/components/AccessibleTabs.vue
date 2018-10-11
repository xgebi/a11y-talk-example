<template>
  <div class="tabs">
    <div role="tablist" aria-label="Entertainment" ref="tablist">
      <button role="tab"
              :aria-controls="'panel-'+index"
              v-bind:key="index" 
              v-for="(tab, index) in tabNames"
              :id="'tab-'+index"
              ref="tabs"
              v-on:keydown="keydownEventListener"
              v-on:click="clickEventListener">
        {{tab}}
      </button>
    </div>
    <div tabindex="0"
          role="tabpanel"
          :aria-labelledby="'tab-'+index"
          :id="'panel-'+index"
          v-bind:key="index" 
          v-for="(content, index) in tabContents" 
          v-html="content"
          ref="panels">
    </div>
  </div>
</template>

<script>

  export default {
    name: 'AccessibleTabs',
    props: [
      'tabsData'
    ],
    data: function() {
      return {
        currentIndex: 0,
        keys: {
          end: 35,
          home: 36,
          left: 37,
          up: 38,
          right: 39,
          down: 40,
          delete: 46
        },
        direction: {
          37: -1,
          38: -1,
          39: 1,
          40: 1
        }
      }
    },
    computed: {
      tabNames: function() {
        return this.tabsData.map(tab => tab.name);
      },
      tabContents: function() {
        return this.tabsData.map(tab => tab.content);
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.$refs.panels.forEach(function(panel, index) {
          if (index > 0) {
            panel.setAttribute("hidden", "hidden");
          }
        });
        this.$refs.tabs.forEach(function(tab, index) {
          if (index === 0) {
            tab.setAttribute("aria-selected", "true");
          } else {
            tab.setAttribute("aria-selected", "false");
          }
        })
      });
    },
    methods:{
      // When a tab is clicked, activateTab is fired to activate it
      clickEventListener: function(event) {
          var tab = event.target;
          this.activateTab(tab, false);
        },

        // Handle keydown on tabs
        keydownEventListener: function(event) {
          var key = event.keyCode;

          switch (key) {
            case this.keys.end:
              event.preventDefault();
              // Activate last tab
              this.activateTab(this.$refs.tabs[this.tabs.length - 1]);
              break;
            case this.keys.home:
              event.preventDefault();
              // Activate first tab
              this.activateTab(this.$refs.tabs[0]);
              break;

            // Up and down are in keydown
            // because we need to prevent page scroll >:)
            case this.keys.up:
            case this.keys.down:
            case this.keys.left:
            case this.keys.right:
              this.determineOrientation(event);
              break;
          }
        },
        // When a tablist’s aria-orientation is set to vertical,
        // only up and down arrow should function.
        // In all other cases only left and right arrow function.
        determineOrientation: function(event) {
          var key = event.keyCode;
          var vertical = this.$refs.tablist.getAttribute('aria-orientation') == 'vertical';
          var proceed = false;

          if (vertical) {
            if (key === this.keys.up || key === this.keys.down) {
              event.preventDefault();
              proceed = true;
            }
          }
          else {
            if (key === this.keys.left || key === this.keys.right) {
              proceed = true;
            }
          }

          if (proceed) {
            this.switchTabOnArrowPress(event);
          }
        },

        // Either focus the next, previous, first, or last tab
        // depening on key pressed
        switchTabOnArrowPress: function(event) {
          var pressed = event.keyCode;

          if (this.direction[pressed]) {
            let index = Array.prototype.indexOf.call(this.$refs.tabs, event.target);
            if (index !== undefined) {
              if (this.$refs.tabs[index + this.direction[pressed]]) {
                this.$refs.tabs[index + this.direction[pressed]].focus();
              }
              else if (pressed === this.keys.left || pressed === this.keys.up) {
                this.focusLastTab();
              }
              else if (pressed === this.keys.right || pressed == this.keys.down) {
                this.focusFirstTab();
              }
            }
          }
        },
        // Make a guess
        focusFirstTab: function() {
          this.$refs.tabs[0].focus();
        },

        // Make a guess
        focusLastTab: function() {
          this.$refs.tabs[this.$refs.tabs.length - 1].focus();
        },
        // Activates any given tab panel
        activateTab: function (tab, setFocus) {
          setFocus = setFocus || true;
          // Deactivate all other tabs
          this.deactivateTabs();

          // Remove tabindex attribute
          tab.removeAttribute('tabindex');

          // Set the tab as selected
          tab.setAttribute('aria-selected', 'true');

          // Get the value of aria-controls (which is an ID)
          var controls = tab.getAttribute('aria-controls');

          // Remove hidden attribute from tab panel to make it visible
          document.getElementById(controls).removeAttribute('hidden');

          // Set focus when required
          if (setFocus) {
            tab.focus();
          }
        },
        // Deactivate all tabs and tab panels
        deactivateTabs: function () {
          for (let t = 0; t < this.$refs.tabs.length; t++) {
            this.$refs.tabs[t].setAttribute('tabindex', '-1');
            this.$refs.tabs[t].setAttribute('aria-selected', 'false');            
          }

          for (let p = 0; p < this.$refs.panels.length; p++) {
            this.$refs.panels[p].setAttribute('hidden', 'hidden');
          }
        }
      }
  }
</script>

<style scoped>
.tabs {
  width: 20em;
  font-family: "lucida grande", sans-serif;
}

[role="tablist"] {
  margin: 0 0 -.1em;
  overflow: visible;
}

[role="tab"] {
  position: relative;
  margin: 0;
  padding: .3em .5em .4em;
  border: 1px solid hsl(219, 1%, 72%);
  border-radius: .2em .2em 0 0;
  box-shadow: 0 0 .2em hsl(219, 1%, 72%);
  overflow: visible;
  font-family: inherit;
  font-size: inherit;
  background: hsl(220, 20%, 94%);
}

[role="tab"]:hover::before,
[role="tab"]:focus::before,
[role="tab"][aria-selected="true"]::before {
  position: absolute;
  bottom: 100%;
  right: -1px;
  left: -1px;
  border-radius: 0.2em 0.2em 0 0;
  border-top: 3px solid hsl(20, 96%, 48%);
  content: '';
}

[role="tab"][aria-selected="true"] {
  border-radius: 0;
  background: hsl(220, 43%, 99%);
  outline: 0;
}

[role="tab"][aria-selected="true"]:not(:focus):not(:hover)::before {
  border-top: 5px solid hsl(218, 96%, 48%);
}

[role="tab"][aria-selected="true"]::after {
  position: absolute;
  z-index: 3;
  bottom: -1px;
  right: 0;
  left: 0;
  height: .3em;
  background: hsl(220, 43%, 99%);
  box-shadow: none;
  content: '';
}

[role="tab"]:hover,
[role="tab"]:focus,
[role="tab"]:active {
  outline: 0;
  border-radius: 0;
  color: inherit;
}

[role="tab"]:hover::before,
[role="tab"]:focus::before {
  border-color: hsl(20, 96%, 48%);
}

[role="tabpanel"] {
  position: relative;
  z-index: 2;
  padding: .5em .5em .7em;
  border: 1px solid hsl(219, 1%, 72%);
  border-radius: 0 .2em .2em .2em;
  box-shadow: 0 0 .2em hsl(219, 1%, 72%);
  background: hsl(220, 43%, 99%);

}

[role="tabpanel"]:focus {
  border-color: hsl(20, 96%, 48%);
  box-shadow: 0 0 .2em hsl(20, 96%, 48%);
  outline: 0;
}

[role="tabpanel"]:focus::after {
  position: absolute;
  bottom: 0;
  right: -1px;
  left: -1px;
  border-bottom: 3px solid hsl(20, 96%, 48%);
  border-radius: 0 0 0.2em 0.2em;
  content: '';
}

[role="tabpanel"] p {
  margin: 0;
}

[role="tabpanel"] * + p {
  margin-top: 1em;
}
</style>