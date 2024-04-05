"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[698],{6262:(e,t)=>{t.A=(e,t)=>{const n=e.__vccOpts||e;for(const[e,o]of t)n[e]=o;return n}},9314:(e,t,n)=>{n.r(t),n.d(t,{comp:()=>a,data:()=>p});var o=n(641);const r=[(0,o.Fv)('<h1 id="附录" tabindex="-1"><a class="header-anchor" href="#附录"><span>附录</span></a></h1><p>在正式开始讲连接表的种类时，我们首先需要知道 SQL <code>存在不同版本的标准规范</code>，因为不同</p><p>规范下的表 连接操作是有区别的。</p><p>SQL 有两个主要的标准，分别是 <strong>SQL92</strong> 和 <strong>SQL99</strong> 。92 和 99 代表了标准提出的时间，SQL92 就是 92 年 提出的标准规范。当然除了 SQL92 和 SQL99 以外，还存在 SQL-86、SQL-89、SQL:2003、SQL:2008、 SQL:2011 和 SQL:2016 等其他的标准。</p><p>这么多标准，到底该学习哪个呢？<strong>实际上最重要的 SQL 标准就是 SQL92 和 SQL99</strong>。一般来说 SQL92 的 形式更简单，但是写的 SQL 语句会比较长，可读性较差。而 SQL99 相比于 SQL92 来说，语法更加复杂， 但可读性更强。我们从这两个标准发布的页数也能看出，SQL92 的标准有 500 页，而 SQL99 标准超过了 1000 页。实际上从 SQL99 之后，很少有人能掌握所有内容，因为确实太多了。就好比我们使用 Windows、Linux 和 Office 的时候，很少有人能掌握全部内容一样。我们只需要掌握一些核心的功能，满 足日常工作的需求即可。</p><p>SQL92 和 SQL99 是经典的 SQL 标准，也分别叫做 SQL-2 和 SQL-3 标准。也正是在这两个标准发布之 后，SQL 影响力越来越大，甚至超越了数据库领域。现如今 SQL 已经不仅仅是数据库领域的主流语言， 还是信息领域中信息处理的主流语言。在图形检索、图像检索以及语音检索中都能看到 SQL 语言的使 用。</p><h2 id="阿里巴巴字段命名规范" tabindex="-1"><a class="header-anchor" href="#阿里巴巴字段命名规范"><span>阿里巴巴字段命名规范</span></a></h2><ul><li>【<strong>强制</strong>】表名、字段名必须使用小写字母或数字，禁止出现数字开头，禁止两个下划线中间只出 现数字。数据库字段名的修改代价很大，因为无法进行预发布，所以字段名称需要慎重考虑。 <ul><li>正例：aliyun_admin，rdc_config，level3_name</li><li>反例：AliyunAdmin，rdcConfig，level_3_name</li></ul></li><li>【<strong>强制</strong>】禁用保留字，如 desc、range、match、delayed 等，请参考 MySQL 官方保留字。</li><li>【<strong>强制</strong>】表必备三字段：id, gmt_create, gmt_modified。 <ul><li>说明：其中 id 必为主键，类型为BIGINT UNSIGNED、单表时自增、步长为 1。gmt_create, gmt_modified 的类型均为 DATETIME 类型，前者现在时表示主动式创建，后者过去分词表示被 动式更新</li></ul></li><li>【<strong>推荐</strong>】表的命名最好是遵循 “业务名称_表的作用”。 <ul><li>正例：alipay_task 、 force_project、 trade_config</li></ul></li><li>【<strong>推荐</strong>】库名与应用名称尽量一致</li><li>【<strong>参考</strong>】合适的字符存储长度，不但节约数据库表空间、节约索引存储，更重要的是提升检索速 度。</li></ul><h2 id="阿里巴巴外键规范" tabindex="-1"><a class="header-anchor" href="#阿里巴巴外键规范"><span>阿里巴巴外键规范</span></a></h2><p>【强制】不得使用外键与级联，一切外键概念必须在<code>应用层</code>解决。</p><p>说明：（概念解释）学生表中的 student_id 是主键，那么成绩表中的 student_id 则为外键。如果更新学 生表中的 student_id，同时触发成绩表中的 student_id 更新，即为级联更新。外键与级联更新适用于 <code>单机低并发</code>，不适合 <code>分布式、 高并发集群</code>；<code>级联更新是强阻塞</code>，存在数据库 <code>更新风暴</code>的风险；外键影响 数据库的 插入速度。</p>',11)],i={},a=(0,n(6262).A)(i,[["render",function(e,t){return(0,o.uX)(),(0,o.CE)("div",null,r)}]]),p=JSON.parse('{"path":"/MySQL/21%E9%99%84%E5%BD%95.html","title":"附录","lang":"zh-CN","frontmatter":{"date":"2024-03-28T00:00:00.000Z","category":["数据库"],"tag":["数据库","MySQL"],"editLink":false,"pageview":false,"sticky":true,"star":true,"order":21,"description":"附录 在正式开始讲连接表的种类时，我们首先需要知道 SQL 存在不同版本的标准规范，因为不同 规范下的表 连接操作是有区别的。 SQL 有两个主要的标准，分别是 SQL92 和 SQL99 。92 和 99 代表了标准提出的时间，SQL92 就是 92 年 提出的标准规范。当然除了 SQL92 和 SQL99 以外，还存在 SQL-86、SQL-89、...","head":[["meta",{"property":"og:url","content":"https://www.yzgc.top/MySQL/21%E9%99%84%E5%BD%95.html"}],["meta",{"property":"og:site_name","content":"鲨瓜"}],["meta",{"property":"og:title","content":"附录"}],["meta",{"property":"og:description","content":"附录 在正式开始讲连接表的种类时，我们首先需要知道 SQL 存在不同版本的标准规范，因为不同 规范下的表 连接操作是有区别的。 SQL 有两个主要的标准，分别是 SQL92 和 SQL99 。92 和 99 代表了标准提出的时间，SQL92 就是 92 年 提出的标准规范。当然除了 SQL92 和 SQL99 以外，还存在 SQL-86、SQL-89、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-05T05:35:13.000Z"}],["meta",{"property":"article:author","content":"鲨瓜"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-05T05:35:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"附录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-05T05:35:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鲨瓜\\",\\"url\\":\\"https://www.yzgc.top\\"}]}"]]},"headers":[{"level":2,"title":"阿里巴巴字段命名规范","slug":"阿里巴巴字段命名规范","link":"#阿里巴巴字段命名规范","children":[]},{"level":2,"title":"阿里巴巴外键规范","slug":"阿里巴巴外键规范","link":"#阿里巴巴外键规范","children":[]}],"git":{"createdTime":1712295313000,"updatedTime":1712295313000,"contributors":[{"name":"“杨照光”","email":"“yangzhaoguang@ciictec.com”","commits":1}]},"readingTime":{"minutes":2.95,"words":884},"filePathRelative":"MySQL/21附录.md","localizedDate":"2024年3月28日","excerpt":"\\n<p>在正式开始讲连接表的种类时，我们首先需要知道 SQL <code>存在不同版本的标准规范</code>，因为不同</p>\\n<p>规范下的表 连接操作是有区别的。</p>\\n<p>SQL 有两个主要的标准，分别是 <strong>SQL92</strong> 和 <strong>SQL99</strong> 。92 和 99 代表了标准提出的时间，SQL92 就是 92 年 提出的标准规范。当然除了 SQL92 和 SQL99 以外，还存在 SQL-86、SQL-89、SQL:2003、SQL:2008、 SQL:2011 和 SQL:2016 等其他的标准。</p>\\n<p>这么多标准，到底该学习哪个呢？<strong>实际上最重要的 SQL 标准就是 SQL92 和 SQL99</strong>。一般来说 SQL92 的 形式更简单，但是写的 SQL 语句会比较长，可读性较差。而 SQL99 相比于 SQL92 来说，语法更加复杂， 但可读性更强。我们从这两个标准发布的页数也能看出，SQL92 的标准有 500 页，而 SQL99 标准超过了 1000 页。实际上从 SQL99 之后，很少有人能掌握所有内容，因为确实太多了。就好比我们使用 Windows、Linux 和 Office 的时候，很少有人能掌握全部内容一样。我们只需要掌握一些核心的功能，满 足日常工作的需求即可。</p>","autoDesc":true}')}}]);