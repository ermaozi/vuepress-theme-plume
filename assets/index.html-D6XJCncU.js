import{_ as a,o as t,c as i,b as s}from"./app-T_7WiRgL.js";const n={};function r(l,e){return t(),i("div",null,e[0]||(e[0]=[s(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>主题内置的 水印插件，为 全站，或者 单个页面 添加水印。</p><p>关联插件：<a href="https://ecosystem.vuejs.press/zh/plugins/features/watermark.html" target="_blank" rel="noopener noreferrer">@vuepress/plugin-watermark</a></p><h2 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项"><span>配置项</span></a></h2><h3 id="enabled" tabindex="-1"><a class="header-anchor" href="#enabled"><span>enabled</span></a></h3><ul><li><p>类型： <code>boolean | ((page: Page) =&gt; boolean)</code></p></li><li><p>默认值： <code>false</code></p></li><li><p>详情：</p><p>指定哪些页面需要添加水印。</p><p>拥有 <code>true</code> 值的页面将会被添加水印。</p></li></ul><h3 id="watermarkoptions" tabindex="-1"><a class="header-anchor" href="#watermarkoptions"><span>watermarkOptions</span></a></h3><ul><li><p>类型： <code>WatermarkOptions</code></p></li><li><p>默认值： <code>undefined</code></p></li><li><p>详情： 配置项请参考 <a href="https://zhensherlock.github.io/watermark-js-plus/zh/config/" target="_blank" rel="noopener noreferrer">watermark-js-plus</a>。</p></li></ul><h4 id="watermarkoptions-parent" tabindex="-1"><a class="header-anchor" href="#watermarkoptions-parent"><span>watermarkOptions.parent</span></a></h4><ul><li><p>类型： <code>string</code></p></li><li><p>默认值： <code>body</code></p></li><li><p>详情：添加水印的父元素选择器。</p><p>默认插入到 body 中，可以指定插入到页面的某个元素中。</p></li></ul><h3 id="delay" tabindex="-1"><a class="header-anchor" href="#delay"><span>delay</span></a></h3><ul><li><p>类型： <code>number</code></p></li><li><p>默认值： <code>500</code></p></li><li><p>详情：添加水印的延时。以毫秒为单位。</p><p>延迟时间取决于页面过渡动画时间，可以根据实际情况调整。</p><p>如果水印的父元素在切换页面时被重新渲染，那么延迟时间应该比页面过渡时间长一些。</p></li></ul><h2 id="frontmatter" tabindex="-1"><a class="header-anchor" href="#frontmatter"><span>Frontmatter</span></a></h2><h3 id="watermark" tabindex="-1"><a class="header-anchor" href="#watermark"><span>watermark</span></a></h3><ul><li><p>类型: <code>boolean | WatermarkOptions</code></p></li><li><p>详情：</p><p>当类型为 <code>boolean</code> 时，表示是否启用水印。</p><p>当类型为 <code>WatermarkOptions</code> 时，表示当前页面水印配置。</p><p>可以参考 <a href="https://zhensherlock.github.io/watermark-js-plus/zh/config/" target="_blank" rel="noopener noreferrer">watermark-js-plus</a> 。</p></li></ul><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">watermark</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  width</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 200</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  height</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 200</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  content</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> Your content</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">  opacity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.5</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span></code></pre></div>`,16)]))}const o=a(n,[["render",r],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/config/watermark/","title":"水印","lang":"zh-CN","frontmatter":{"title":"水印","author":"Plume Theme","createTime":"2024/06/17 15:37:18","permalink":"/config/watermark/","description":"概述 主题内置的 水印插件，为 全站，或者 单个页面 添加水印。 关联插件：@vuepress/plugin-watermark 配置项 enabled 类型： boolean | ((page: Page) => boolean) 默认值： false 详情： 指定哪些页面需要添加水印。 拥有 true 值的页面将会被添加水印。 watermarkO...","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/config/watermark/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"水印"}],["meta",{"property":"og:description","content":"概述 主题内置的 水印插件，为 全站，或者 单个页面 添加水印。 关联插件：@vuepress/plugin-watermark 配置项 enabled 类型： boolean | ((page: Page) => boolean) 默认值： false 详情： 指定哪些页面需要添加水印。 拥有 true 值的页面将会被添加水印。 watermarkO..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-17T09:56:41.000Z"}],["meta",{"property":"article:author","content":"Plume Theme"}],["meta",{"property":"article:modified_time","content":"2024-06-17T09:56:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"水印\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-17T09:56:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Plume Theme\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"配置项","slug":"配置项","link":"#配置项","children":[{"level":3,"title":"enabled","slug":"enabled","link":"#enabled","children":[]},{"level":3,"title":"watermarkOptions","slug":"watermarkoptions","link":"#watermarkoptions","children":[]},{"level":3,"title":"delay","slug":"delay","link":"#delay","children":[]}]},{"level":2,"title":"Frontmatter","slug":"frontmatter","link":"#frontmatter","children":[{"level":3,"title":"watermark","slug":"watermark","link":"#watermark","children":[]}]}],"readingTime":{"minutes":0.99,"words":298},"git":{"createdTime":1718618201000,"updatedTime":1718618201000,"contributors":[{"name":"pengzhanbo","email":"volodymyr@foxmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"notes/theme/config/plugins/水印.md"}`);export{o as comp,d as data};
