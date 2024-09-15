import{_ as i,o as n,c as e,b as a}from"./app-T_7WiRgL.js";const t={};function p(l,s){return n(),e("div",null,s[0]||(s[0]=[a(`<h2 id="netlifyfunctionsplugin-options" tabindex="-1"><a class="header-anchor" href="#netlifyfunctionsplugin-options"><span>netlifyFunctionsPlugin(options)</span></a></h2><p>在 vuepress 项目中使用， 或者 开发vuepress-theme时使用，提供 netlify-functions 开发时服务。</p><p>该插件应该优先于其他有依赖该插件的其他插件之前调用。</p><div class="language-js" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">netlifyFunctionsPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">({</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  sourceDirectory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  destDirectory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  proxyPrefix</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">})</span></span></code></pre></div><h3 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>options</span></a></h3><p><strong>类型：</strong> <code>{ sourceDirectory: string, destDirectory: string, proxyPrefix: string }</code></p><ul><li><p><code>options.sourceDirectory</code>:</p><p><code>functions</code> 开发时所在目录， 默认值： <code>app.dir.source(&#39;.vuepress/functions&#39;)</code>, 即，如果你的vuepress项目源码目录是 <code>src</code>， 那么 <code>sourceDirectory</code> 默认为 <code>src/.vuepress/functions/</code></p></li><li><p><code>options.destDirectory</code>:</p><p><code>functions</code> 构建后输出目录，默认值： <code>app.dir.dest(&#39;functions&#39;)</code>, 即，如果你的 vuepress项目配置的 <code>dest</code> 输出目录为 <code>docs</code>， 那么默认输出目录为 <code>docs/functions</code>, 一般来说，这个配置不需要手动修改。</p></li><li><p><code>options.proxyPrefix</code>:</p><p>在开发环境中， <code>Netlify Functions</code> 服务的默认路径是 <code>/.netlify/functions/*</code>, 但这并不能保持开发环境和 生产部署环境一致，所以需要将路径重写。</p><p>默认值： <code>/api</code></p><p>即 <code>^/api/*</code> 的请求会被转发到 <code>/.netlify/functions/*</code> ， 如, <code>functions/my_function.ts</code> ，则请求 <code>/api/my_function</code> 将会转发到 <code>/.netlify/functions/my_function</code>。</p></li></ul><h2 id="usenetlifyfunctionsplugin-app-options" tabindex="-1"><a class="header-anchor" href="#usenetlifyfunctionsplugin-app-options"><span>useNetlifyFunctionsPlugin(app, options)</span></a></h2><p>在开发 vuepress plugin 时使用，为插件提供 <code>netlify functiosn</code> 支持</p><div class="language-ts line-numbers-mode" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">import</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> useNetlifyFunctionsPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> from</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-plugin-netlify-functions</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">function</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> myPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">():</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Plugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">App</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =&gt;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    const </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 请求前缀,  默认 /api</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      proxyPrefix</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      preparePluginFunctions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      generatePluginFunctions</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> useNetlifyFunctionsPlugin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">app</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">      // 指定插件的functions目录，相关脚本在此目录中开发</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      directory</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">path</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">resolve</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">__dirname</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">, </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">functions</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    })</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    return</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">      name</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: </span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">vuepress-plugin-myPlugin</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      onPrepared</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: () =&gt; </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">preparePluginFunctions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(),</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">      onGenerated</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">: () =&gt; </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">generatePluginFunctions</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(),</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="options-1" tabindex="-1"><a class="header-anchor" href="#options-1"><span>options</span></a></h3><p><strong>类型：</strong> <code>{ directory: string }</code></p><ul><li><p><code>options.directory</code></p><p>插件中的 functions 开发目录。</p><p>一般来说，它的值都设置为 <code>path.resolve(__dirname, &#39;functions&#39;)</code></p></li></ul>`,13)]))}const o=i(t,[["render",p],["__file","index.html.vue"]]),r=JSON.parse(`{"path":"/plugins/plugin-netlify-functions/api/","title":"API","lang":"zh-CN","frontmatter":{"title":"API","author":"pengzhanbo","createTime":"2024/03/12 13:55:25","permalink":"/plugins/plugin-netlify-functions/api/","description":"netlifyFunctionsPlugin(options) 在 vuepress 项目中使用， 或者 开发vuepress-theme时使用，提供 netlify-functions 开发时服务。 该插件应该优先于其他有依赖该插件的其他插件之前调用。 options 类型： { sourceDirectory: string, destDirect...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/plugins/plugin-netlify-functions/api/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"API"}],["meta",{"property":"og:description","content":"netlifyFunctionsPlugin(options) 在 vuepress 项目中使用， 或者 开发vuepress-theme时使用，提供 netlify-functions 开发时服务。 该插件应该优先于其他有依赖该插件的其他插件之前调用。 options 类型： { sourceDirectory: string, destDirect..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-13T20:44:09.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-03-13T20:44:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-13T20:44:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[{"level":2,"title":"netlifyFunctionsPlugin(options)","slug":"netlifyfunctionsplugin-options","link":"#netlifyfunctionsplugin-options","children":[{"level":3,"title":"options","slug":"options","link":"#options","children":[]}]},{"level":2,"title":"useNetlifyFunctionsPlugin(app, options)","slug":"usenetlifyfunctionsplugin-app-options","link":"#usenetlifyfunctionsplugin-app-options","children":[{"level":3,"title":"options","slug":"options-1","link":"#options-1","children":[]}]}],"readingTime":{"minutes":1.2,"words":359},"git":{"createdTime":1710362649000,"updatedTime":1710362649000,"contributors":[{"name":"pengzhanbo","email":"volodymyr@foxmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"notes/plugins/netlify-functions/api.md"}`);export{o as comp,r as data};
