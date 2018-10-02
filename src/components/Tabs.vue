<template>
  <div class="tabbed">
    <ul role="tablist">
      <li v-bind:key="index" v-for="(tab, index) in tabNames">
        <a :href="'#section-' + index" :id="'tab-'+index" v-on:keydown="moveToAnotherTab" v-on:click="switchTab" ref="tabs" :aria-selected="{true: index === 0}">{{tab}}</a>
      </li>
    </ul>
    <section v-bind:key="index" v-for="(content, index) in tabContents" :id="'section-'+index" ref="tabSections" role="tabpanel" :aria-labelledby="'tab-'+index" v-on:keydown="leavePanel">
      {{content}}
    </section>
  </div>
</template>

<script>

  export default {
    name: 'Tabs',
    props: [
      'tabsData'
    ],
    data: function() {
      return {
        currentIndex: 0
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
        this.$refs.tabSections.forEach((tabSection, index) => {
          if (index === 0)
            return;
          tabSection.setAttribute("hidden", "hidden");
        });
        this.$refs.tabs.forEach((tab, index) => {
          if (index === 0) {
            tab.setAttribute("tabindex", "0");
            tab.setAttribute("aria-selected", "true");
            return;
          }
          tab.setAttribute("tabindex", "-1");
          tab.setAttribute("aria-selected", "false");
        });
      })
    },
    methods:{
      moveToAnotherTab: function(event) {
        event.preventDefault();
        let index = Array.prototype.indexOf.call(this.$refs.tabs, event.currentTarget);        
        if (event.keyCode === 37 && index > 0) {          
          index--;                    
          this.$refs.tabSections[index+1].setAttribute("hidden", "hidden");
          this.$refs.tabSections[index].removeAttribute("hidden");
          this.$refs.tabs[index+1].setAttribute("aria-selected", "false");
          this.$refs.tabs[index].setAttribute("aria-selected", "true");
          this.$refs.tabs[index+1].setAttribute("tabindex", "-1");
          this.$refs.tabs[index].setAttribute("tabindex", "0");
          this.$refs.tabs[index].focus();
        }
        if (event.keyCode === 39 && index < (this.tabNames.length - 1)) {
          index++;
          this.$refs.tabSections[index-1].setAttribute("hidden", "hidden");
          this.$refs.tabSections[index].removeAttribute("hidden");
          this.$refs.tabs[index-1].setAttribute("aria-selected", "false");
          this.$refs.tabs[index].setAttribute("aria-selected", "true");
          this.$refs.tabs[index-1].setAttribute("tabindex", "-1");
          this.$refs.tabs[index].setAttribute("tabindex", "0");
          this.$refs.tabs[index].focus();
        }                
        if (event.keyCode === 40) {
          this.$refs.tabSections[index].setAttribute("tabindex", "0");
          this.$refs.tabSections[index].focus();
        }
      },
      switchTab: function(event) {
        event.preventDefault();
        let currentIndex = Array.prototype.indexOf.call(this.$refs.tabs, event.currentTarget);  
        this.$refs.tabs.forEach(function(tab, index) {
          if (index === currentIndex) {
            tab.setAttribute("aria-selected", "true");
            tab.setAttribute("tabindex", "0");
            tab.focus();
            return;
          }
          tab.removeAttribute("aria-selected");
          tab.setAttribute("tabindex", "-1");
        });
        this.$refs.tabSections.forEach(function(tabSection, index) {
          if (index === currentIndex) {
            tabSection.removeAttribute("hidden");
            return;
          }
          tabSection.setAttribute("hidden", "hidden");
        });               
      },
      leavePanel(event) {
        let index = Array.prototype.indexOf.call(this.$refs.tabSections, event.currentTarget); 
        if (event.keyCode === 38) {
          this.$refs.tabSections[index].setAttribute("tabindex", "-1");
          this.$refs.tabs[index].focus();
        }
      }
    }
  }
</script>

<style>
[role="tablist"] {
  padding: 0;
}

[role="tablist"] li, [role="tablist"] a {
  display: inline-block;
}

[role="tablist"] a {
  text-decoration: none;
  padding: 0.5rem 1em;
}

[role="tablist"] [aria-selected="true"] {
  border: 2px solid;
  background: #fff;
  border-bottom: 0;
  position: relative;
  top: 2px;
}

[role="tabpanel"] {
  border: 2px solid;
  padding: 1.5rem;
}

[role="tabpanel"] * + * {
  margin-top: 0.75rem;
}

*:focus {
  outline: none;
  box-shadow: inset 0 0 0 4px lightBlue;
}
</style>