"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[194],{6262:(s,a)=>{a.A=(s,a)=>{const n=s.__vccOpts||s;for(const[s,e]of a)n[s]=e;return n}},7586:(s,a,n)=>{n.r(a),n.d(a,{comp:()=>p,data:()=>l});var e=n(641);const t=[(0,e.Fv)('<h1 id="二十、备份" tabindex="-1"><a class="header-anchor" href="#二十、备份"><span>二十、备份</span></a></h1><p><strong>物理备份</strong>：备份数据文件，转储数据库物理文件到某一目录。物理备份恢复速度比较快，但占用空间比 较大，MySQL中可以用 <code>xtrabackup</code> 工具来进行物理备份。</p><p><strong>逻辑备份</strong>：对数据库对象利用工具进行导出工作，汇总入备份文件内。逻辑备份恢复速度慢，但占用空 间小，更灵活。MySQL 中常用的逻辑备份工具为 <code>mysqldump</code> 。逻辑备份就是 时候执行备份的sql语句实现数据库数据的重现。</p><h2 id="_20-1-逻辑备份" tabindex="-1"><a class="header-anchor" href="#_20-1-逻辑备份"><span>20.1 逻辑备份</span></a></h2><p><strong>备份一个数据库</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysqldump  –u 用户名称 –h 主机名称 –p密码 待备份的数据库名称<span class="token punctuation">[</span>tbname<span class="token punctuation">,</span> <span class="token punctuation">[</span>tbname<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> 备份文件名称<span class="token punctuation">.</span><span class="token keyword">sql</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>说明： 备份的文件并非一定要求后缀名为.sql，例如后缀名为.txt的文件也是可以的。</p></blockquote><p><strong>备份所有数据库</strong></p><p>若想用mysqldump备份整个实例，可以使用 <code>--all-databases</code> 或 <code>-A</code>参数</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysqldump <span class="token operator">-</span>uroot <span class="token operator">-</span>pxxxxxx <span class="token comment">--all-databases &gt; all_database.sql</span>\n mysqldump <span class="token operator">-</span>uroot <span class="token operator">-</span>pxxxxxx <span class="token operator">-</span>A <span class="token operator">&gt;</span> all_database<span class="token punctuation">.</span><span class="token keyword">sql</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备份部分数据库</strong></p><p>使用 <code>--databases</code> 或 <code> -B</code> 参数了，该参数后面跟数据库名称，多个数据库间用空格隔开。如果指定 databases参数，备份文件中会存在创建数据库的语句，如果不指定参数，则不存在。语法如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysqldump  –u <span class="token keyword">user</span> –h host –p <span class="token comment">--databases  [数据库的名称1 [数据库的名称2...]] &gt; 备份文件名称.sql</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>备份部份表</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysqldump  –u <span class="token keyword">user</span> –h host –p 数据库的名称  <span class="token punctuation">[</span>表名<span class="token number">1</span> <span class="token punctuation">[</span>表名<span class="token number">2.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> 备份文件名称<span class="token punctuation">.</span><span class="token keyword">sql</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>备份单表的部分数据</strong>、</p><p>有些时候一张表的数据量很大，我们只需要部分数据。这时就可以使用 <code>--where</code> 选项了。where后面附 带需要满足的条件。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysqldump <span class="token operator">-</span>uroot <span class="token operator">-</span>p atguigu student <span class="token comment">--where=&quot;id &lt; 10 &quot; &gt; student_part_id10_low_bak.sql</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>排除某些表的备份</strong></p><p>如果我们想备份某个库，但是某些表数据量很大或者与业务关联不大，这个时候可以考虑排除掉这些 表，同样的，选项 <code>--ignore-table </code>可以完成这个功能。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysqldump <span class="token operator">-</span>uroot <span class="token operator">-</span>p atguigu <span class="token comment">--ignore-table=atguigu.student &gt; no_stu_bak.sql</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过如下指定判定文件中没有student表结构：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>grep <span class="token string">&quot;student&quot;</span>  no_stu_bak<span class="token punctuation">.</span><span class="token keyword">sql</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>只备份结构或只备份数据</strong></p><p>只备份结构的话可以使用 <code>--no-data</code> 简写为<code>-d</code>选项；只备份数据可以使用 <code>--no-create-info </code>简写为 <code>-t</code>选项。</p><ul><li>只备份数据</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysqldump <span class="token operator">-</span>uroot <span class="token operator">-</span>p atguigu <span class="token comment">--no-data &gt; atguigu_no_data_bak.sql</span>\n<span class="token comment">#使用grep命令，没有找到insert相关语句，表示没有数据备份。</span>\n<span class="token punctuation">[</span>root<span class="token variable">@node1</span> <span class="token operator">~</span><span class="token punctuation">]</span><span class="token comment"># grep &quot;INSERT&quot; atguigu_no_data_bak.sql</span>\n<span class="token punctuation">[</span>root<span class="token variable">@node1</span> <span class="token operator">~</span><span class="token punctuation">]</span><span class="token comment">#</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>只备份结构</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysqldump <span class="token operator">-</span>uroot <span class="token operator">-</span>p atguigu <span class="token comment">--no-create-info &gt; atguigu_no_create_info_bak.sql</span>\n<span class="token comment">#使用grep命令，没有找到create相关语句，表示没有数据结构。</span>\n<span class="token punctuation">[</span>root<span class="token variable">@node1</span> <span class="token operator">~</span><span class="token punctuation">]</span><span class="token comment"># grep &quot;CREATE&quot; atguigu_no_create_info_bak.sql</span>\n<span class="token punctuation">[</span>root<span class="token variable">@node1</span> <span class="token operator">~</span><span class="token punctuation">]</span><span class="token comment">#</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>备份中包含存储过程、函数、事件</strong></p><p>mysqldump备份默认是不包含存储过程，自定义函数及事件的。可以使用 <code>--routines </code>或<code>-R</code>选项来备份存储过程及函数，使用 <code>--events </code>或<code>-E</code>参数来备份事件。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysqldump <span class="token operator">-</span>uroot <span class="token operator">-</span>p <span class="token operator">-</span>R <span class="token operator">-</span>E <span class="token comment">--databases atguigu &gt; fun_atguigu_bak.sql</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_20-2-逻辑恢复" tabindex="-1"><a class="header-anchor" href="#_20-2-逻辑恢复"><span>20.2 逻辑恢复</span></a></h2><p><strong>基本语法</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql –u root –p <span class="token punctuation">[</span>dbname<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">backup</span><span class="token punctuation">.</span><span class="token keyword">sql</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>单库备份中恢复单库</strong></p><p>如果备份文件中包含了创建数据库的语句，则恢复的时候不需要指定数据库名称，如下所示</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p <span class="token operator">&lt;</span> atguigu<span class="token punctuation">.</span><span class="token keyword">sql</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>否则就需要指定数据库：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p atguigu4<span class="token operator">&lt;</span> atguigu<span class="token punctuation">.</span><span class="token keyword">sql</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>全量备份恢复</strong></p><p>如果我们现在有昨天的全量备份，现在想整个恢复，则可以这样操作</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>p <span class="token operator">&lt;</span> <span class="token keyword">all</span><span class="token punctuation">.</span><span class="token keyword">sql</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>从全量备份中恢复单库</strong></p><p>可能有这样的需求，比如说我们只想<code>恢复某一个库</code>，但是我们有的是<code>整个实例的备份</code>，这个时候我们可以从全量备份中分离出单个库的备份。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>sed <span class="token operator">-</span>n <span class="token string">&#39;/^-- Current Database: `atguigu`/,/^-- Current Database: `/p&#39;</span> all_database<span class="token punctuation">.</span><span class="token keyword">sql</span> <span class="token operator">&gt;</span> atguigu<span class="token punctuation">.</span><span class="token keyword">sql</span>\n\n<span class="token comment">#分离完成后我们再导入atguigu.sql即可恢复单个库</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>从单库备份中恢复单表</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>cat atguigu<span class="token punctuation">.</span><span class="token keyword">sql</span> <span class="token operator">|</span> sed <span class="token operator">-</span>e <span class="token string">&#39;/./{H;$!d;}&#39;</span> <span class="token operator">-</span>e <span class="token string">&#39;x;/CREATE TABLE `class`/!d;q&#39;</span> <span class="token operator">&gt;</span>\n\nclass_structure<span class="token punctuation">.</span><span class="token keyword">sql</span>\ncat atguigu<span class="token punctuation">.</span><span class="token keyword">sql</span> <span class="token operator">|</span> grep <span class="token comment">--ignore-case &#39;insert into `class`&#39; &gt; class_data.sql</span>\n<span class="token comment">#用shell语法分离出创建表的语句及插入数据的语句后 再依次导出即可完成恢复</span>\n<span class="token keyword">use</span> atguigu<span class="token punctuation">;</span>\n\nmysql<span class="token operator">&gt;</span> source class_structure<span class="token punctuation">.</span><span class="token keyword">sql</span><span class="token punctuation">;</span>\nQuery OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected<span class="token punctuation">,</span> <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>\n\nmysql<span class="token operator">&gt;</span> source class_data<span class="token punctuation">.</span><span class="token keyword">sql</span><span class="token punctuation">;</span>\nQuery OK<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">row</span> affected <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',48)],o={},p=(0,n(6262).A)(o,[["render",function(s,a){return(0,e.uX)(),(0,e.CE)("div",null,t)}]]),l=JSON.parse('{"path":"/MySQL/20%E5%A4%87%E4%BB%BD.html","title":"二十、备份","lang":"zh-CN","frontmatter":{"date":"2024-03-28T00:00:00.000Z","category":["数据库"],"tag":["数据库","MySQL"],"editLink":false,"pageview":false,"sticky":true,"star":true,"order":20,"description":"二十、备份 物理备份：备份数据文件，转储数据库物理文件到某一目录。物理备份恢复速度比较快，但占用空间比 较大，MySQL中可以用 xtrabackup 工具来进行物理备份。 逻辑备份：对数据库对象利用工具进行导出工作，汇总入备份文件内。逻辑备份恢复速度慢，但占用空 间小，更灵活。MySQL 中常用的逻辑备份工具为 mysqldump 。逻辑备份就是 时...","head":[["meta",{"property":"og:url","content":"https://www.yzgc.top/MySQL/20%E5%A4%87%E4%BB%BD.html"}],["meta",{"property":"og:site_name","content":"鲨瓜"}],["meta",{"property":"og:title","content":"二十、备份"}],["meta",{"property":"og:description","content":"二十、备份 物理备份：备份数据文件，转储数据库物理文件到某一目录。物理备份恢复速度比较快，但占用空间比 较大，MySQL中可以用 xtrabackup 工具来进行物理备份。 逻辑备份：对数据库对象利用工具进行导出工作，汇总入备份文件内。逻辑备份恢复速度慢，但占用空 间小，更灵活。MySQL 中常用的逻辑备份工具为 mysqldump 。逻辑备份就是 时..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-05T05:35:13.000Z"}],["meta",{"property":"article:author","content":"鲨瓜"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-05T05:35:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"二十、备份\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-05T05:35:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鲨瓜\\",\\"url\\":\\"https://www.yzgc.top\\"}]}"]]},"headers":[{"level":2,"title":"20.1 逻辑备份","slug":"_20-1-逻辑备份","link":"#_20-1-逻辑备份","children":[]},{"level":2,"title":"20.2 逻辑恢复","slug":"_20-2-逻辑恢复","link":"#_20-2-逻辑恢复","children":[]}],"git":{"createdTime":1712295313000,"updatedTime":1712295313000,"contributors":[{"name":"“杨照光”","email":"“yangzhaoguang@ciictec.com”","commits":1}]},"readingTime":{"minutes":3.77,"words":1132},"filePathRelative":"MySQL/20备份.md","localizedDate":"2024年3月28日","excerpt":"\\n<p><strong>物理备份</strong>：备份数据文件，转储数据库物理文件到某一目录。物理备份恢复速度比较快，但占用空间比 较大，MySQL中可以用 <code>xtrabackup</code> 工具来进行物理备份。</p>\\n<p><strong>逻辑备份</strong>：对数据库对象利用工具进行导出工作，汇总入备份文件内。逻辑备份恢复速度慢，但占用空 间小，更灵活。MySQL 中常用的逻辑备份工具为 <code>mysqldump</code> 。逻辑备份就是 时候执行备份的sql语句实现数据库数据的重现。</p>\\n<h2>20.1 逻辑备份</h2>\\n<p><strong>备份一个数据库</strong></p>","autoDesc":true}')}}]);