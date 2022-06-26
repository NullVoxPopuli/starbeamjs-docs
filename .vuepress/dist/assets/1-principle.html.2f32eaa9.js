import{_ as r,r as i,o as s,c as n,b as e,e as c,a as t,d as a}from"./app.bc742e23.js";const l={},d=t('<h1 id="our-guiding-principle" tabindex="-1"><a class="header-anchor" href="#our-guiding-principle" aria-hidden="true">#</a> Our Guiding Principle</h1><div class="custom-container tip"><p class="custom-container-title">Starbeam&#39;s Core Principle</p><p>If you model your reactive data like any other data, you can build reliable reactive UIs with the skills you already have.</p></div><p><strong>We believe that reactive programming should feel exactly like regular programming.</strong></p><p>Reactive UI frameworks have a way of describing reactive inputs and a way of describing an output in terms of those inputs, which the framework automatically keeps up to date.</p><p>Starbeam&#39;s APIs for input data are annotated versions of normal JavaScript data structures, and you use normal JavaScript functions for all of your computation.</p><h2 id="what-that-means-in-practice" tabindex="-1"><a class="header-anchor" href="#what-that-means-in-practice" aria-hidden="true">#</a> What That Means in Practice</h2><p>Here are some examples of how Starbeam&#39;s principles work in practice, especially in ways that might be different from other reactive frameworks you&#39;re familiar with.</p><h3 id="data-updates-happen-immediately" tabindex="-1"><a class="header-anchor" href="#data-updates-happen-immediately" aria-hidden="true">#</a> Data Updates Happen Immediately</h3><p>When you update a reactive value, the reactive update happens immediately. ==Any code that accesses the reactive value will see the new value.==</p><p>There are no exceptions.</p><p>This means that you can write elaborate abstractions or libraries that are built on reactive values, and they will behave exactly as you expect regardless of how they&#39;re used by app code.</p><h3 id="you-derive-state-using-normal-functions" tabindex="-1"><a class="header-anchor" href="#you-derive-state-using-normal-functions" aria-hidden="true">#</a> You Derive State Using Normal Functions</h3><p>If you want to compute a value from reactive values, you just use functions.</p><p>You can also use getters, methods, and the new private versions of those features to access the reactive values. You can mix and match JavaScript features however you want. Once you&#39;ve used a reactive value to store your state, ==you don&#39;t have to think about reactivity as you compute values.==</p>',14),p={class:"custom-container details"},h=e("summary",null,"Example",-1),u=e("p",null,";;; ./$snippets/items.ts#reactive-class",-1),m=a("In this example, we built a "),v=e("code",null,"People",-1),f=a(" class that stores a list of people. We used a "),y={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields",target:"_blank",rel:"noopener noreferrer"},_=a("private field"),w=a(" to store a reactive array."),b=t("<p>::: info</p><p>We could have stored it some other way (like a public field or even in a <code>WeakMap</code>) and everything would have worked just as well.</p><p>:::</p><p>We created a <code>byLocation</code> method that uses a normal JavaScript <code>filter</code> function to filter the array by location. And we use the somewhat obscure <code>findIndex</code> method to find the person we&#39;re updating, and updated the array by replacing the item at that index.</p><p>At this point, we have a very normal JavaScript library that completely hides the reactivity at its core.</p><p>If we then <strong>render</strong> the result of <code>byLocation</code>, the renderer will update the output whenever <code>update</code> is called.</p><p><strong>The bottom line is</strong>: While Starbeam&#39;s reactive values and rendering concept may feel analogous to the reactive systems you&#39;re used to, the similarities end with those concepts. All other reads and writes to those reactive values are normal JavaScript.</p>",7);function g(x,k){const o=i("ExternalLinkIcon");return s(),n("div",null,[d,e("details",p,[h,u,e("p",null,[m,v,f,e("a",y,[_,c(o)]),w]),b])])}var I=r(l,[["render",g],["__file","1-principle.html.vue"]]);export{I as default};
