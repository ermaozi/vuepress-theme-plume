import{_ as s,o as t,c as e,b as a}from"./app-T_7WiRgL.js";const n={};function p(l,i){return t(),e("div",null,i[0]||(i[0]=[a(`<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>导入代码 可以让你在 md 文件中 导入另一个文件的 代码，并为其高亮显示。</p><p>它可以帮助你在文章中引用其他文件的代码，避免编写重复的代码。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2><p>你可以使用下面的语法，从文件中导入代码块：</p><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">code</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">../snippet/snippet-1.js</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p><strong>输出：</strong></p><div class="language-js" data-ext="js" data-title="js"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">export</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> const</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> a</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span></span></code></pre></div><p>如果你只想导入这个文件的一部分：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 仅导入第 1 行至第 10 行 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">code{1-10}</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">../snippet/snippet-1.js</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div><p>代码语言会根据文件扩展名进行推断，但我们建议你显式指定：</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 指定代码语言 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">code js</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">../snippet/snippet-1.js</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">&lt;!-- 行高亮 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">@</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">code js{2,4-5}</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#393A3490;--shiki-dark:#DEDCD590;--shiki-light-text-decoration:underline;--shiki-dark-text-decoration:underline;">../foo.js</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span></code></pre></div>`,13)]))}const h=s(n,[["render",p],["__file","index.html.vue"]]),o=JSON.parse(`{"path":"/guide/code/import/","title":"导入代码","lang":"zh-CN","frontmatter":{"title":"导入代码","author":"pengzhanbo","icon":"mdi:import","createTime":"2024/04/04 10:39:22","permalink":"/guide/code/import/","description":"概述 导入代码 可以让你在 md 文件中 导入另一个文件的 代码，并为其高亮显示。 它可以帮助你在文章中引用其他文件的代码，避免编写重复的代码。 语法 你可以使用下面的语法，从文件中导入代码块： 输入： 输出： 如果你只想导入这个文件的一部分： 代码语言会根据文件扩展名进行推断，但我们建议你显式指定：","head":[["script",{"id":"check-dark-mode"},";(function () {const um= localStorage.getItem('vuepress-theme-appearance') || 'auto';const sm = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;if (um === 'dark' || (um !== 'light' && sm)) {document.documentElement.classList.add('dark');}})();"],["script",{"id":"check-mac-os"},"document.documentElement.classList.toggle('mac', /Mac|iPhone|iPod|iPad/i.test(navigator.platform))"],["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/guide/code/import/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"导入代码"}],["meta",{"property":"og:description","content":"概述 导入代码 可以让你在 md 文件中 导入另一个文件的 代码，并为其高亮显示。 它可以帮助你在文章中引用其他文件的代码，避免编写重复的代码。 语法 你可以使用下面的语法，从文件中导入代码块： 输入： 输出： 如果你只想导入这个文件的一部分： 代码语言会根据文件扩展名进行推断，但我们建议你显式指定："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-04T16:15:46.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-04-04T16:15:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"导入代码\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-04T16:15:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"语法","slug":"语法","link":"#语法","children":[]}],"readingTime":{"minutes":0.64,"words":191},"git":{"createdTime":1712247346000,"updatedTime":1712247346000,"contributors":[{"name":"pengzhanbo","email":"volodymyr@foxmail.com","commits":1}]},"autoDesc":true,"filePathRelative":"notes/theme/guide/代码/导入代码.md"}`);export{h as comp,o as data};
