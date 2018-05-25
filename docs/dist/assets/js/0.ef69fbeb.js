(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{189:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._ssrNode('<h1 id="vue-slim-better-scroll"><a href="#vue-slim-better-scroll" aria-hidden="true" class="header-anchor">#</a> vue-slim-better-scroll</h1>'),t._ssrNode("<blockquote>","</blockquote>",[t._ssrNode("<p>","</p>",[t._ssrNode("开箱即用的/渐进式的 vue移动端滚动组件/插件，基于"),t._ssrNode('<a href="https://github.com/ustbhuangyi/better-scroll" target="_blank" rel="noopener noreferrer">',"</a>",[t._ssrNode("better-scroll"),a("OutboundLink")],2)],2)]),t._ssrNode('<h2 id="✨-特性"><a href="#✨-特性" aria-hidden="true" class="header-anchor">#</a> ✨ 特性</h2><ul><li><strong>极简使用</strong><ul><li>零配置/渐进式配置</li><li>自动刷新滚动高度</li></ul></li><li><strong>更优性能</strong><ul><li>使用 transform 替代 position ，下拉刷新不再掉帧</li></ul></li><li><strong>更好体验</strong><ul><li>滚动内容小于滚动视口时，也可以滚动/回弹/下拉刷新/上拉加载</li><li>多次下拉刷新节流</li><li>适配 flexible</li><li>多处细节改进</li></ul></li></ul><h2 id="🐠-示例"><a href="#🐠-示例" aria-hidden="true" class="header-anchor">#</a> 🐠 示例</h2>'),t._ssrNode("<p>","</p>",[t._ssrNode('<a href="https://wannaxiao.github.io/vue-slim-better-scroll/page/" target="_blank" rel="noopener noreferrer">',"</a>",[t._ssrNode("Demo"),a("OutboundLink")],2)]),t._ssrNode("<p>","</p>",[t._ssrNode('<a href="https://github.com/wannaxiao/vue-slim-better-scroll/blob/master/src/App.vue" target="_blank" rel="noopener noreferrer">',"</a>",[t._ssrNode("Demo示例代码"),a("OutboundLink")],2)]),t._ssrNode('<h2 id="🚀-快速开始"><a href="#🚀-快速开始" aria-hidden="true" class="header-anchor">#</a> 🚀 快速开始</h2><ol><li>安装 vue-slim-better-scroll</li></ol><div class="language-js extra-class"><pre class="language-js"><code><span class="token comment">// 使用yarn：</span>\nyarn add vue<span class="token operator">-</span>slim<span class="token operator">-</span>better<span class="token operator">-</span>scroll\n<span class="token comment">// 或使用npm：</span>\nnpm i <span class="token operator">-</span><span class="token constant">S</span> vue<span class="token operator">-</span>slim<span class="token operator">-</span>better<span class="token operator">-</span>scroll\n</code></pre></div><ol start="2"><li>引入 vue-slim-better-scroll</li></ol><ul><li>插件形式全局引入</li></ul><div class="language-js extra-class"><pre class="language-js"><code><span class="token comment">// 入口文件 main.js 中</span>\n<span class="token keyword">import</span> Scroll <span class="token keyword">from</span> <span class="token string">\'vue-slim-better-scroll\'</span>\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Scroll<span class="token punctuation">)</span>\n</code></pre></div><ul><li>组件形式引入</li></ul><div class="language-js extra-class"><pre class="language-js"><code><span class="token comment">// *.vue 中</span>\n<span class="token keyword">import</span> Scroll <span class="token keyword">from</span> <span class="token string">\'vue-slim-better-scroll\'</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* ... */</span>\n  components<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    Scroll<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n  <span class="token comment">/* ... */</span>\n<span class="token punctuation">}</span>\n</code></pre></div>'),t._ssrNode('<ol start="3">',"</ol>",[t._ssrNode("<li>","</li>",[t._ssrNode("使用它，请参考"),t._ssrNode('<a href="https://github.com/wannaxiao/vue-slim-better-scroll/blob/master/src/App.vue" target="_blank" rel="noopener noreferrer">',"</a>",[t._ssrNode("Demo示例代码"),a("OutboundLink")],2)],2)]),t._ssrNode('<div class="language-html extra-class"><pre class="language-html"><code><span class="token comment">&lt;!-- 简单场景 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroll</span>\n  <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>scroll<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:autoUpdate</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@pullingDown</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>loadRefresh<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@pullingUp</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>loadMore<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- 滚动的内容 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Scroll</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 复杂场景 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Scroll</span>\n  <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>scroll<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:updateData</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>[data]<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">:refreshData</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>[]<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@pullingDown</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>loadRefresh<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">@pullingUp</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>loadMore<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!-- 滚动的内容 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Scroll</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="🔌-api文档"><a href="#🔌-api文档" aria-hidden="true" class="header-anchor">#</a> 🔌 API文档</h2><h3 id="props"><a href="#props" aria-hidden="true" class="header-anchor">#</a> Props</h3>'),t._ssrNode("<table>","</table>",[t._ssrNode("<thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead>"),t._ssrNode("<tbody>","</tbody>",[t._ssrNode("<tr><td>probeType</td><td>派发scroll事件的条件</td><td>Number</td><td>1</td></tr><tr><td>listenScroll</td><td>是否监听滚动，开启后才能派发scroll事件</td><td>Boolean</td><td>false</td></tr><tr><td>listenBeforeScroll</td><td>是否监听滚动之前，开启后才能派发beforeScrollStart事件</td><td>Boolean</td><td>false</td></tr><tr><td>scrollX</td><td>开启X轴滚动</td><td>Boolean</td><td>false</td></tr><tr><td>scrollY</td><td>开启Y轴滚动</td><td>Boolean</td><td>true</td></tr><tr><td>scrollbar</td><td>开启滚动条</td><td>Boolean or Object</td><td>false</td></tr><tr><td>pullDown</td><td>启用下拉刷新</td><td>Boolean</td><td>true</td></tr><tr><td>pullDownConfig</td><td>下拉刷新配置</td><td>Object</td><td>{ <br> threshold: 90, // 触发 pullingDown 的距离    <br> stop: 40, // pullingDown 正在刷新 hold 时的距离 <br> txt: '刷新成功', <br> }</td></tr><tr><td>pullUp</td><td>启用上拉加载</td><td>Boolean</td><td>true</td></tr><tr><td>pullUpConfig</td><td>上拉加载配置</td><td>Object</td><td>{ <br> threshold: 100, // 提前触发 pullingUp 的距离 <br> txt: { more: '上拉加载', noMore: '— 我是有底线的 —' <br> }</td></tr><tr><td>startY</td><td>纵轴方向初始化位置</td><td>Number</td><td>0</td></tr><tr><td>bounce</td><td>回弹效果</td><td>Boolean</td><td>true</td></tr><tr><td>bounceTime</td><td>回弹时间</td><td>Number</td><td>600</td></tr>"),t._ssrNode("<tr>","</tr>",[t._ssrNode("<td>preventDefaultException</td>"),t._ssrNode("<td>","</td>",[t._ssrNode('<a href="https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#preventdefaultexception" target="_blank" rel="noopener noreferrer">',"</a>",[t._ssrNode("不阻止默认行为"),a("OutboundLink")],2)]),t._ssrNode("<td>Object</td><td>{ <br> tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/ <br> }</td>")],2),t._ssrNode("<tr><td>autoUpdate</td><td>自动更新高度。原理为深监视 this.$parent.$data 自动调用 update()，适用于简单场景。复杂场景请使用updateData/refreshData 或手动调用update()/refresh()</td><td>Boolean</td><td>false</td></tr><tr><td>updateData</td><td>引起更新上拉/下拉加载状态的数据（下拉刷新/上拉加载相关的数据）。设置此项时，autoUpdate 应设置为 false</td><td>Array</td><td>null</td></tr><tr><td>refreshData</td><td>引起刷新高度的数据（不包含 updateData 内的数据）</td><td>Array</td><td>null</td></tr>")],2)],2),t._ssrNode('<h3 id="methods"><a href="#methods" aria-hidden="true" class="header-anchor">#</a> Methods</h3>'),t._ssrNode("<table>","</table>",[t._ssrNode("<thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead>"),t._ssrNode("<tbody>","</tbody>",[t._ssrNode("<tr><td>initScroll</td><td>初始化scroll组件</td><td></td></tr><tr><td>disable</td><td>禁用 better-scroll，DOM 事件（如 touchstart、touchmove、touchend）的回调函数不再响应</td><td></td></tr><tr><td>enable</td><td>启用 better-scroll, 默认 开启</td><td></td></tr><tr><td>scrollTo</td><td>滚动到指定的位置</td><td>(x:Number, y:Number, time:Number) <br> 1.x横轴坐标(px)，默认值0 <br> 2.y 纵轴坐标(px)，默认值0 <br> 3.滚动动画执行的时长(ms)，默认值=$props.bounceTime=600</td></tr>"),t._ssrNode("<tr>","</tr>",[t._ssrNode("<td>scrollToElement</td><td>滚动到指定的目标元素</td>"),t._ssrNode("<td>","</td>",[t._ssrNode("(el, time, offsetX , offsetY )接收4个参数 详情请查看: "),t._ssrNode('<a href="https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/api.html#scrolltoelementel-time-offsetx-offsety-easing" target="_blank" rel="noopener noreferrer">',"</a>",[t._ssrNode("scrollToElement"),a("OutboundLink")],2)],2)],2),t._ssrNode("<tr><td>destroy</td><td>销毁 better-scroll，解绑事件</td><td></td></tr><tr><td>refresh</td><td>刷新滚动高度（当页面无法滚动时，可尝试调用此方法）</td><td></td></tr><tr><td>update</td><td>更新加载状态，下拉/下拉成功后使用。当 autoUpdate 为 true 时 vue-slim-better-scroll 会在恰当的时候自动调用该方法。当上拉加载到最后一页/需要触发停止上拉加载时，需要手动调用它</td><td>(final:Boolean) 表明pullUp上拉加载是否到了最底部</td></tr>")],2)],2),t._ssrNode('<h3 id="events"><a href="#events" aria-hidden="true" class="header-anchor">#</a> Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>scroll</td><td>触发时机：滚动过程中，具体时机取决于选项中的 probeType (触发事件在参数中需要开启 <strong>listenScroll</strong>，该参数默认为 false )</td><td>(pos:Object) 滚动的实时坐标</td></tr><tr><td>beforeScrollStart</td><td>触发时机：滚动开始之前 (触发事件在参数中需要开启 <strong>listenBeforeScroll</strong>，该参数默认为 false )</td><td></td></tr><tr><td>pullingDown</td><td>触发时机：在一次下拉刷新的动作后，这个时机一般用来去后端请求数据。(触发事件在参数中需要开启 <strong>pullDown</strong>，该参数默认为 true )</td><td></td></tr><tr><td>pullingUp</td><td>触发时机：在一次下拉刷新的动作后，这个时机一般用来去后端请求数据。(触发事件在参数中需要开启 <strong>pullUp</strong>，该参数默认为 true )</td><td></td></tr></tbody></table><h3 id="slots"><a href="#slots" aria-hidden="true" class="header-anchor">#</a> Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>滚动的主体内容区域</td></tr><tr><td>pulldown</td><td>下拉刷新的内容</td></tr><tr><td>pullup</td><td>上拉加载的内容</td></tr></tbody></table><br><br>'),t._ssrNode("<p>","</p>",[t._ssrNode("<strong>","</strong>",[t._ssrNode("🌟 "),t._ssrNode('<a href="https://github.com/wannaxiao/vue-slim-better-scroll" target="_blank" rel="noopener noreferrer">',"</a>",[t._ssrNode("Star me !"),a("OutboundLink")],2)],2)])],2)},[],!1,null,null,"13acc543");s.default=e.exports}}]);