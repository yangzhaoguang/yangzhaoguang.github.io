"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[3325],{66262:(e,t)=>{t.A=(e,t)=>{const a=e.__vccOpts||e;for(const[e,i]of t)a[e]=i;return a}},2962:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>d,data:()=>m});var i=a(20641);const n=a.p+"assets/img/image-20240107131342618.9ff61530.png",r=a.p+"assets/img/image-20240107133218203.17d09e9e.png",o=a.p+"assets/img/image-20240107134006553.d2900219.png",p=a.p+"assets/img/image-20240107134232352.9d223569.png",s=a.p+"assets/img/image-20240107134510774.8554febb.png",l=a.p+"assets/img/image-20240107134613344.34980f82.png",g=[(0,i.Fv)('<h1 id="一、概述" tabindex="-1"><a class="header-anchor" href="#一、概述"><span>一、概述</span></a></h1><h2 id="_1-1-rdbms-和-非-rdbms" tabindex="-1"><a class="header-anchor" href="#_1-1-rdbms-和-非-rdbms"><span>1.1 RDBMS 和 非 RDBMS</span></a></h2><p>关系型数据库绝对是 DBMS 的主流，其中使用最多的 DBMS 分别是 Oracle、 MySQL 和 SQL Server。</p><p>这些都是关系型数据库（RDBMS）。</p><h3 id="_1-1-1-关系型数据库-rdbms" tabindex="-1"><a class="header-anchor" href="#_1-1-1-关系型数据库-rdbms"><span>1.1.1 关系型数据库(RDBMS)</span></a></h3><p>这种类型的数据库是 <code>最古老</code> 的数据库类型，关系型数据库模型是把复杂的数据结构归结为简单的 二元关系 （即二维表格形式）。</p><figure><img src="'+n+'" alt="image-20240107131342618.png" tabindex="0" loading="lazy"><figcaption>image-20240107131342618.png</figcaption></figure><p>关系型数据库以 <code>行(row)</code> 和 <code>列(column)</code> 的形式存储数据，以便于用户理解。这一系列的行和列被</p><p><strong>SQL就是关系型数据库的查询语句</strong></p><p><strong>优势</strong></p><ul><li>可以使用SQL语句方便在一个表或者多个表进行复杂查询</li><li>使得对于安全性能很高的数据访问要求得以实现</li></ul><h3 id="_1-1-2-非关系型数据库-非rdbms" tabindex="-1"><a class="header-anchor" href="#_1-1-2-非关系型数据库-非rdbms"><span>1.1.2 非关系型数据库(非RDBMS)</span></a></h3><p>非关系型数据库，可看成传统关系型数据库的功能 阉割版本 ，基于键值对存储数据，不需要经过SQL层 的解析， <strong>性能非常高</strong> 。同时，通过减少不常用的功能，进一步提高性能。 目前基本上大部分主流的非关系型数据库都是免费的。</p><p><strong>有哪些非关系型数据库？</strong></p><p><strong>键值型数据库</strong></p><p>键值型数据库通过 Key-Value 键值的方式来存储数据，其中 Key 和 Value 可以是简单的对象，也可以是复杂的对象。Key 作为唯一的标识符，<code>优点是查找速度快</code>，在这方面明显优于关系型数据库，<code>缺点是无法像关系型数据库一样使用条件过滤（比如 WHERE），如果你不知道去哪里找数据，就要遍历所有的键</code>，这就会消耗大量的计算。</p><p>典型的键值型数据库使用场景是作为<code>缓存</code>。比如：<code>Redis</code></p><p><strong>文档型数据库</strong></p><p>此类数据库可存放并获取文档，可以是XML、JSON等格式。在数据库中文档作为处理信息的基本单位， 一个文档就相当于一条记录。文档数据库所存放的文档，就相当于键值数据库所存放的“值”。MongoDB 是最流行的文档型数据库。此外，还有CouchDB等。</p><p><strong>搜索引擎数据库</strong></p><p>虽然关系型数据库采用了索引提升检索效率，但是针对全文索引效率却较低。搜索引擎数据库是应用在 搜索引擎领域的数据存储形式，由于搜索引擎会爬取大量的数据，并以特定的格式进行存储，这样在检 索的时候才能保证性能最优。核心原理是“倒排索引”。 典型产品：Solr、Elasticsearch、Splunk 等。</p><h2 id="_1-2-关系型数据库的设计规则" tabindex="-1"><a class="header-anchor" href="#_1-2-关系型数据库的设计规则"><span>1.2 关系型数据库的设计规则</span></a></h2><ul><li>一个数据库中可以有多个表，每个表都有一个名字，用来标识自己。</li><li>表名具有唯一性。 表具有一些特性，这些特性定义了数据在表中如何存储，类似Java和Python中 “类”的设计。</li></ul><h3 id="_1-2-1-表、记录、字段" tabindex="-1"><a class="header-anchor" href="#_1-2-1-表、记录、字段"><span>1.2.1 表、记录、字段</span></a></h3><p>E-R（entity-relationship，实体-联系）模型中有三个主要概念是：<code> 实体集 、 属性 、 联系集</code> 。</p><figure><img src="'+r+'" alt="image-20240107133218203" tabindex="0" loading="lazy"><figcaption>image-20240107133218203</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>数据库中的一张表  &lt;----&gt; Java中的类\n数据库中的一条记录  &lt;----&gt; Java中的对象\n数据库中的一个列  &lt;----&gt; Java中的一个字段、属性\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-2-表的关联关系" tabindex="-1"><a class="header-anchor" href="#_1-2-2-表的关联关系"><span>1.2.2 表的关联关系</span></a></h3><p><strong>四种</strong>：一对一关联、一对多关联、多对多关联、自我引用</p><p><strong>一对一(one to one)</strong></p><ul><li>在实际的开发中应用不多，因为一对一可以创建成一张表。</li><li>一条记录对应另一个表中的一条记录</li></ul><p><strong>两种建表原则</strong>：</p><ul><li>外键唯一：主表的主键和从表的外键（唯一），形成主外键关系，外键唯一。</li><li>外键是主键：主表的主键和从表的主键，形成主外键关系。</li></ul><figure><img src="'+o+'" alt="image-20240107134006553" tabindex="0" loading="lazy"><figcaption>image-20240107134006553</figcaption></figure><p><strong>一对多关系(one to many)</strong></p><ul><li>一条记录对应另一个表中的多条记录</li></ul><p><strong>一对多建表原则</strong>：在从表(多方)创建一个字段，字段作为外键指向主表(一方)的主键</p><figure><img src="'+p+'" alt="image-20240107134232352" tabindex="0" loading="lazy"><figcaption>image-20240107134232352</figcaption></figure><p><strong>多对多关系(many to many)</strong></p><p>要表示多对多关系，必须<code>创建第三个表</code>，该表通常称为 <code>联接表</code> ，它将多对多关系划分为两个一对多关 系。将这两个表的主键都插入到第三个表中。</p><figure><img src="'+s+'" alt="image-20240107134510774" tabindex="0" loading="lazy"><figcaption>image-20240107134510774</figcaption></figure><p><strong>自我引用(self reference)</strong></p><figure><img src="'+l+'" alt="image-20240107134613344" tabindex="0" loading="lazy"><figcaption>image-20240107134613344</figcaption></figure>',43)],c={},d=(0,a(66262).A)(c,[["render",function(e,t){return(0,i.uX)(),(0,i.CE)("div",null,g)}]]),m=JSON.parse('{"path":"/MySQL/01%E6%A6%82%E8%BF%B0.html","title":"一、概述","lang":"zh-CN","frontmatter":{"date":"2024-03-28T00:00:00.000Z","category":["数据库"],"tag":["数据库","MySQL"],"editLink":false,"pageview":false,"sticky":true,"star":true,"order":1,"description":"一、概述 1.1 RDBMS 和 非 RDBMS 关系型数据库绝对是 DBMS 的主流，其中使用最多的 DBMS 分别是 Oracle、 MySQL 和 SQL Server。 这些都是关系型数据库（RDBMS）。 1.1.1 关系型数据库(RDBMS) 这种类型的数据库是 最古老 的数据库类型，关系型数据库模型是把复杂的数据结构归结为简单的 二元关系...","head":[["meta",{"property":"og:url","content":"https://www.yzgc.top/MySQL/01%E6%A6%82%E8%BF%B0.html"}],["meta",{"property":"og:site_name","content":"鲨瓜"}],["meta",{"property":"og:title","content":"一、概述"}],["meta",{"property":"og:description","content":"一、概述 1.1 RDBMS 和 非 RDBMS 关系型数据库绝对是 DBMS 的主流，其中使用最多的 DBMS 分别是 Oracle、 MySQL 和 SQL Server。 这些都是关系型数据库（RDBMS）。 1.1.1 关系型数据库(RDBMS) 这种类型的数据库是 最古老 的数据库类型，关系型数据库模型是把复杂的数据结构归结为简单的 二元关系..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-05T05:35:13.000Z"}],["meta",{"property":"article:author","content":"鲨瓜"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-05T05:35:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"一、概述\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-05T05:35:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鲨瓜\\",\\"url\\":\\"https://www.yzgc.top\\"}]}"]]},"headers":[{"level":2,"title":"1.1 RDBMS 和 非 RDBMS","slug":"_1-1-rdbms-和-非-rdbms","link":"#_1-1-rdbms-和-非-rdbms","children":[{"level":3,"title":"1.1.1 关系型数据库(RDBMS)","slug":"_1-1-1-关系型数据库-rdbms","link":"#_1-1-1-关系型数据库-rdbms","children":[]},{"level":3,"title":"1.1.2 非关系型数据库(非RDBMS)","slug":"_1-1-2-非关系型数据库-非rdbms","link":"#_1-1-2-非关系型数据库-非rdbms","children":[]}]},{"level":2,"title":"1.2 关系型数据库的设计规则","slug":"_1-2-关系型数据库的设计规则","link":"#_1-2-关系型数据库的设计规则","children":[{"level":3,"title":"1.2.1 表、记录、字段","slug":"_1-2-1-表、记录、字段","link":"#_1-2-1-表、记录、字段","children":[]},{"level":3,"title":"1.2.2 表的关联关系","slug":"_1-2-2-表的关联关系","link":"#_1-2-2-表的关联关系","children":[]}]}],"git":{"createdTime":1712295313000,"updatedTime":1712295313000,"contributors":[{"name":"“杨照光”","email":"“yangzhaoguang@ciictec.com”","commits":1}]},"readingTime":{"minutes":3.94,"words":1182},"filePathRelative":"MySQL/01概述.md","localizedDate":"2024年3月28日","excerpt":"\\n<h2>1.1 RDBMS 和 非 RDBMS</h2>\\n<p>关系型数据库绝对是 DBMS 的主流，其中使用最多的 DBMS 分别是 Oracle、 MySQL 和 SQL Server。</p>\\n<p>这些都是关系型数据库（RDBMS）。</p>\\n<h3>1.1.1 关系型数据库(RDBMS)</h3>\\n<p>这种类型的数据库是 <code>最古老</code> 的数据库类型，关系型数据库模型是把复杂的数据结构归结为简单的 二元关系 （即二维表格形式）。</p>\\n<figure><figcaption>image-20240107131342618.png</figcaption></figure>","autoDesc":true}')}}]);