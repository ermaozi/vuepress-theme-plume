import{_ as h,r,o,c as p,a as i,e as s,d as k,w as t,b as a}from"./app-T_7WiRgL.js";const c={};function u(g,e){const l=r("CodeTabs");return o(),p("div",null,[e[2]||(e[2]=i("p",null,[s("主题支持在 Markdown 文件中嵌入 "),i("a",{href:"https://jsfiddle.net/",target:"_blank",rel:"noopener noreferrer"},"JS Fiddle"),s("。")],-1)),e[3]||(e[3]=i("h2",{id:"配置",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#配置"},[i("span",null,"配置")])],-1)),e[4]||(e[4]=i("p",null,"此功能默认不启用，你可以在配置文件中启用它。",-1)),k(l,{id:"9",data:[{id:".vuepress/config.ts"}]},{title0:t(({value:d,isActive:n})=>e[0]||(e[0]=[s(".vuepress/config.ts")])),tab0:t(({value:d,isActive:n})=>e[1]||(e[1]=[i("div",{class:"language-ts","data-ext":"ts","data-title":"ts"},[i("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),i("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark has-highlighted vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," default"),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," defineUserConfig"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  theme"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"plumeTheme"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"({")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    plugins"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"      markdownPower"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": {")]),s(`
`),i("span",{class:"line highlighted"},[i("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"        jsfiddle"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),i("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"true"),i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", ")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"      },")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    }")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"})")])])])],-1)])),_:1}),e[5]||(e[5]=a('<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><h3 id="简单语法" tabindex="-1"><a class="header-anchor" href="#简单语法"><span>简单语法</span></a></h3><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">jsfiddle</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">user/id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><h3 id="更多选项" tabindex="-1"><a class="header-anchor" href="#更多选项"><span>更多选项</span></a></h3><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">jsfiddle theme=&quot;dark&quot; tab=&quot;js,css,html,result&quot; height=&quot;500px&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">user/id</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><ul><li><code>user</code>: 用户</li><li><code>id</code>: jsfiddle id</li><li><code>theme</code>: 主题模式， 可选值： <code>&quot;light&quot; | &quot;dark&quot;</code></li><li><code>tab</code>: 选项卡， 可选值：<code>&quot;js&quot; | &quot;css&quot; | &quot;html&quot; | &quot;result&quot;</code>, 多个用 <code>&quot;,&quot;</code> 分割， 顺序将决定选项卡的排序，默认为 <code>js,css,html,result</code></li><li><code>height</code>: 高度</li></ul><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">jsfiddle</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">pengzhanbo/1xbwz2p9</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',10)),e[6]||(e[6]=i("iframe",{class:"js-fiddle-iframe-wrapper",style:{width:"100%",height:"400px",margin:"16px auto",border:"none","border-radius":"5px"},title:"JS Fiddle",src:"https://jsfiddle.net/pengzhanbo/1xbwz2p9/embedded/js,css,html,result/dark/",allowfullscreen:"true",allowpaymentrequest:"true"},null,-1)),e[7]||(e[7]=a('<p>输入：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">jsfiddle tab=&quot;result,js,css,html&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">pengzhanbo/1xbwz2p9</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>输出：</p>',3)),e[8]||(e[8]=i("iframe",{class:"js-fiddle-iframe-wrapper",style:{width:"100%",height:"400px",margin:"16px auto",border:"none","border-radius":"5px"},title:"JS Fiddle",src:"https://jsfiddle.net/pengzhanbo/1xbwz2p9/embedded/result,js,css,html/dark/",allowfullscreen:"true",allowpaymentrequest:"true"},null,-1))])}const y=h(c,[["render",u],["__file","index.html.vue"]]),f=JSON.parse(`{"path":"/guide/code/jsfiddle/","title":"Js Fiddle","lang":"zh-CN","frontmatter":{"title":"Js Fiddle","author":"pengzhanbo","icon":"bxl:jsfiddle","createTime":"2024/04/04 10:42:21","permalink":"/guide/code/jsfiddle/","description":"主题支持在 Markdown 文件中嵌入 JS Fiddle。 配置 此功能默认不启用，你可以在配置文件中启用它。 语法 简单语法 更多选项 user: 用户 id: jsfiddle id theme: 主题模式， 可选值： \\"light\\" | \\"dark\\" tab: 选项卡， 可选值：\\"js\\" | \\"css\\" | \\"html\\" | \\"result\\"...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/guide/code/jsfiddle/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"Js Fiddle"}],["meta",{"property":"og:description","content":"主题支持在 Markdown 文件中嵌入 JS Fiddle。 配置 此功能默认不启用，你可以在配置文件中启用它。 语法 简单语法 更多选项 user: 用户 id: jsfiddle id theme: 主题模式， 可选值： \\"light\\" | \\"dark\\" tab: 选项卡， 可选值：\\"js\\" | \\"css\\" | \\"html\\" | \\"result\\"..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-28T16:37:25.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-04-28T16:37:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Js Fiddle\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-28T16:37:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[{"level":3,"title":"简单语法","slug":"简单语法","link":"#简单语法","children":[]},{"level":3,"title":"更多选项","slug":"更多选项","link":"#更多选项","children":[]}]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"readingTime":{"minutes":0.61,"words":183},"git":{"createdTime":1712247346000,"updatedTime":1714322245000,"contributors":[{"name":"pengzhanbo","email":"volodymyr@foxmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"notes/theme/guide/代码演示/jsFiddle.md"}`);export{y as comp,f as data};
