"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[218],{66262:(n,s)=>{s.A=(n,s)=>{const a=n.__vccOpts||n;for(const[n,e]of s)a[n]=e;return a}},91185:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>o,data:()=>c});var e=a(20641);const p=a.p+"assets/img/image-20240302163657908.dad9f6cf.png",t=[(0,e.Fv)('<h1 id="七、-约束" tabindex="-1"><a class="header-anchor" href="#七、-约束"><span>七、 约束</span></a></h1><h2 id="_7-1-约束概念" tabindex="-1"><a class="header-anchor" href="#_7-1-约束概念"><span>7.1 约束概念</span></a></h2><p><strong>为什么需要约束？</strong></p><p>数据完整性（Data Integrity）是指数据的精确性（Accuracy）和可靠性（Reliability）。它是防止数据库中 存在不符合语义规定的数据和防止因错误信息的输入输出造成无效操作或错误信息而提出的。</p><p>为了保证数据的完整性，SQL规范以约束的方式对表数据进行额外的条件限制。从以下<code>四个方面</code>考虑：</p><ul><li>实体完整性（Entity Integrity） ：例如，同一个表中，不能存在两条完全相同无法区分的记录</li><li>域完整性（Domain Integrity） ：例如：年龄范围0-120，性别范围“男/女</li><li>引用完整性（Referential Integrity） ：例如：员工所在部门，在部门表中要能找到这个部门</li><li>用户自定义完整性（User-defined Integrity） ：例如：用户名唯一、密码不能为空等，本部门 经理的工资不得高于本部门职工的平均工资的5倍</li></ul><p><strong>什么是约束？</strong></p><p>约束是表级的强制规定。</p><p>可以在创建表时规定约束（通过 <code>CREATE TABLE </code>语句），或者在表创建之后通过 <code>ALTER TABLE </code>语句规定 约束。</p><h2 id="_7-2-约束的分类" tabindex="-1"><a class="header-anchor" href="#_7-2-约束的分类"><span>7.2 约束的分类</span></a></h2><p>根据约束数据列的限制，约束可分为：</p><ul><li><p>单列约束：每个约束只约束一列</p></li><li><p>多列约束：每个约束可约束多列数据</p></li></ul><p>根据约束的作用范围，约束可分为：</p><ul><li><p>列级约束：只能作用在一个列上，跟在列的定义后面</p></li><li><p>表级约束：可以作用在多个列上，不与列一起，而是单独定义</p></li></ul><p>根据约束起的作用，约束可分为：</p><ul><li>NOT NULL 非空约束，规定某个字段不能为空</li><li>UNIQUE 唯一约束，规定某个字段在整个表中是唯一的</li><li>PRIMARY KEY 主键(非空且唯一)约束</li><li>FOREIGN KEY 外键约束</li><li>CHECK 检查约束</li><li>DEFAULT 默认值约束</li></ul><p><strong>查看某张表的约束：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">#information_schema数据库名（系统库）</span>\n<span class="token comment">#table_constraints表名称（专门存储各个表的约束）</span>\n<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> information_schema<span class="token punctuation">.</span>table_constraints \n<span class="token keyword">WHERE</span> table_name <span class="token operator">=</span> <span class="token string">&#39;表名称&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-1-非空约束" tabindex="-1"><a class="header-anchor" href="#_7-2-1-非空约束"><span>7.2.1 非空约束</span></a></h3><p>限定某个字段/某列的值不允许为空</p><p><strong>关键字</strong>：NOT NULL</p><p><strong>特点</strong></p><p>默认所有的类型的值都可以是NULL，包括INT、FLOAT等数据类型</p><p>非空约束只能出现在表对象的列上，只能某个列单独限定非空，不能组合非空</p><p>一个表可以有很多列都分别限定了非空</p><p>空字符串&#39;&#39;不等于NULL，0也不等于NULL</p><p><strong>增加</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment"># 建表时</span>\n<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名称<span class="token punctuation">(</span>\n字段名  数据类型<span class="token punctuation">,</span>\n字段名  数据类型 <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>  \n字段名  数据类型 <span class="token operator">NOT</span> <span class="token boolean">NULL</span>\n <span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token comment"># 建表之后</span>\n <span class="token keyword">alter</span> <span class="token keyword">table</span> 表名称 <span class="token keyword">modify</span> 字段名 数据类型 <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-2-唯一性约束" tabindex="-1"><a class="header-anchor" href="#_7-2-2-唯一性约束"><span>7.2.2 唯一性约束</span></a></h3><p>用来限制某个字段/某列的值不能重复</p><p>**关键字：**UNIQUE</p><p><strong>特点</strong></p><p>同一个表可以有多个唯一约束。</p><p>唯一约束可以是某一个列的值唯一，也可以多个列组合的值唯一。</p><p>唯一性约束允许列值为空。</p><p>在创建唯一约束的时候，如果不给唯一约束命名，就默认和列名相同。</p><p>MySQL会给唯一约束的列上默认创建一个唯一索引。</p><p><strong>增加约束</strong></p><p>字段列表中如果是一个字段，表示该列的值唯一。如果是两个或更多个字段，那么复合唯一，即多个字段的组合是唯 一的</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment"># 建表时：</span>\n<span class="token keyword">create</span> <span class="token keyword">table</span> 表名称<span class="token punctuation">(</span>\n字段名  数据类型<span class="token punctuation">,</span>\n字段名  数据类型  <span class="token keyword">unique</span><span class="token punctuation">,</span>  \n字段名  数据类型  <span class="token keyword">unique</span> <span class="token keyword">key</span><span class="token punctuation">,</span>\n字段名  数据类型\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n<span class="token keyword">create</span> <span class="token keyword">table</span> 表名称<span class="token punctuation">(</span>\n字段名  数据类型<span class="token punctuation">,</span>\n字段名  数据类型<span class="token punctuation">,</span>  \n字段名  数据类型<span class="token punctuation">,</span>\n <span class="token punctuation">[</span><span class="token keyword">constraint</span> 约束名<span class="token punctuation">]</span> <span class="token keyword">unique</span> <span class="token keyword">key</span><span class="token punctuation">(</span>字段名<span class="token punctuation">)</span>\n <span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n \n<span class="token comment"># 建表后：</span>\n<span class="token comment">#方式1：</span>\n<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名称 <span class="token keyword">add</span> <span class="token keyword">unique</span> <span class="token keyword">key</span><span class="token punctuation">(</span>字段列表<span class="token punctuation">)</span><span class="token punctuation">;</span> \n<span class="token comment">#方式2：</span>\n<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名称 <span class="token keyword">modify</span> 字段名 字段类型 <span class="token keyword">unique</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除唯一约束</strong></p><ul><li><p>添加唯一性约束的列上也会自动创建唯一索引。</p></li><li><p>删除唯一约束只能通过删除唯一索引的方式删除。</p></li><li><p>删除时需要指定唯一索引名，唯一索引名就和唯一约束名一样。</p></li><li><p>如果创建唯一约束时未指定名称，如果是单列，就默认和列名相同；如果是组合列，那么默认和() 中排在第一个的列名相同。也可以自定义唯一性约束名。</p></li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> information_schema<span class="token punctuation">.</span>table_constraints <span class="token keyword">WHERE</span> table_name <span class="token operator">=</span> <span class="token string">&#39;表名&#39;</span><span class="token punctuation">;</span> <span class="token comment">#查看都有哪些约束</span>\n\n<span class="token comment"># 删除索引</span>\n<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> <span class="token keyword">USER</span> \n<span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> uk_name_pwd<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：可以通过 <code>show index from </code>表名称; 查看表的索引</p><h3 id="_7-2-3-主键约束" tabindex="-1"><a class="header-anchor" href="#_7-2-3-主键约束"><span>7.2.3 主键约束</span></a></h3><p>用来唯一标识表中的一行记录</p><p><strong>关键字</strong>：primary key</p><p><strong>特点：</strong></p><p>主键约束相当于唯一约束+非空约束的组合，主键约束列不允许重复，也不允许出现空值。</p><p>一个表最多只能有一个主键约束，建立主键约束可以在列级别创建，也可以在表级别上创建</p><p>如果是多列组合的复合主键约束，那么这些列都不允许为空值，并且组合的值不允许重复。</p><p><code>MySQL的主键名总是PRIMARY</code>，就算自己命名了主键约束名也没用。</p><p>当创建主键约束时，系统默认会在所在的列或列组合上建立对应的主键索引（能够根据主键查询 的，就根据主键查询，效率更高）。如果删除主键约束了，主键约束对应的索引就自动删除了。</p><p>需要注意的一点是，不要修改主键字段的值。因为主键是数据记录的唯一标识，如果修改了主键的 值，就有可能会破坏数据的完整性。</p><p><strong>添加主键约束</strong></p><p>建表时：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> 表名称<span class="token punctuation">(</span>\n字段名  数据类型 <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token comment">#列级模式,</span>\n字段名  数据类型<span class="token punctuation">,</span>  \n字段名  数据类型\n\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">create</span> <span class="token keyword">table</span> 表名称<span class="token punctuation">(</span>\n字段名  数据类型<span class="token punctuation">,</span>\n字段名  数据类型<span class="token punctuation">,</span>  \n字段名  数据类型<span class="token punctuation">,</span>\n <span class="token punctuation">[</span><span class="token keyword">constraint</span> 约束名<span class="token punctuation">]</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">(</span>字段列表<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token comment">#表级模式</span>\n <span class="token comment">#字段列表可以是一个字段，也可以是多个字段，如果是多个字段的话，是复合主键</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>建表后：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名称 <span class="token keyword">ADD</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>字段列表<span class="token punctuation">)</span><span class="token punctuation">;</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>删除主键</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">table</span> 表名称 <span class="token keyword">drop</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_7-2-4-自增列" tabindex="-1"><a class="header-anchor" href="#_7-2-4-自增列"><span>7.2.4 自增列</span></a></h3><p>某个字段的值自增</p><p><strong>关键字</strong>：auto_increment</p><p><strong>特点</strong></p><p>（1）一个表最多只能有一个自增长列</p><p>（2）当需要产生唯一标识符或顺序值时，可设置自增长</p><p>（3）自增长列约束的列必须是键列（<code>主键列，唯一键列</code>）</p><p>（4）自增约束的列的数据类型必须是<code>整数类型 </code></p><p>（5）如果自增列指定了 0 和 null，会在当前最大值的基础上自增；如果自增列手动指定了具体值，直接 赋值为具体值。</p><p><strong>添加约束</strong></p><p><strong>错误演示</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment"># 不能单独使用，配合唯一列、主键列使用</span>\n<span class="token keyword">create</span> <span class="token keyword">table</span> employee<span class="token punctuation">(</span>\n eid <span class="token keyword">int</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>\n ename <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span>\n <span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token comment"># ERROR 1075 (42000): Incorrect table definition; there can be only one auto column and it must be defined as a key  </span>\n \n \n <span class="token comment"># 必须是整型</span>\n <span class="token keyword">create</span> <span class="token keyword">table</span> employee<span class="token punctuation">(</span>\n eid <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>\n ename <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">unique</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span>\n <span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token comment"># ERROR 1063 (42000): Incorrect column specifier for column &#39;ename&#39;  因为ename不是整数类</span>\n型\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确使用</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> 表名称<span class="token punctuation">(</span>\n字段名  数据类型  <span class="token keyword">primary</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>\n字段名  数据类型  <span class="token keyword">unique</span> <span class="token keyword">key</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>  \n字段名  数据类型  <span class="token keyword">unique</span> <span class="token keyword">key</span><span class="token punctuation">,</span>\n字段名  数据类型  <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">default</span> 默认值<span class="token punctuation">,</span> \n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token keyword">create</span> <span class="token keyword">table</span> 表名称<span class="token punctuation">(</span>\n字段名  数据类型 <span class="token keyword">default</span> 默认值 <span class="token punctuation">,</span>\n字段名  数据类型 <span class="token keyword">unique</span> <span class="token keyword">key</span> <span class="token keyword">auto_increment</span><span class="token punctuation">,</span>  \n字段名  数据类型 <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">default</span> 默认值<span class="token punctuation">,</span><span class="token punctuation">,</span>\n <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">(</span>字段名<span class="token punctuation">)</span>\n <span class="token punctuation">)</span><span class="token punctuation">;</span>\n \n <span class="token keyword">alter</span> <span class="token keyword">table</span> 表名称 <span class="token keyword">modify</span> 字段名 数据类型 <span class="token keyword">auto_increment</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除约束</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">#alter table 表名称 modify 字段名 数据类型 auto_increment;#给这个字段增加自增约束</span>\n<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名称 <span class="token keyword">modify</span> 字段名 数据类型<span class="token punctuation">;</span> <span class="token comment">#去掉auto_increment相当于删除</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-5-外键约束" tabindex="-1"><a class="header-anchor" href="#_7-2-5-外键约束"><span>7.2.5 外键约束</span></a></h3><p>限定某个表的某个字段的引用完整性。</p><p>比如：员工表的员工所在部门的选择，必须在部门表能找到对应的部分。</p><figure><img src="'+p+'" alt="image-20240302163657908" tabindex="0" loading="lazy"><figcaption>image-20240302163657908</figcaption></figure><p>**关键字：**FOREIGN KEY</p><p><strong>主表/从表 和 父表/子表</strong></p><p>主表（父表）：被引用的表，被参考的表 【部门表】</p><p>从表（子表）：引用别人的表，参考别人的表【员工表】</p><p><strong>特点</strong></p><p>（1）从表的外键列，必须引用/参考主表的主键或唯一约束的列</p><p>为什么？因为被依赖/被参考的值必须是唯一的</p><p>（2）在创建外键约束时，如果不给外键约束命名，默认名不是列名，而是自动产生一个外键名（例如 student_ibfk_1;），也可以指定外键约束名。</p><p>（3）创建(CREATE)表时就指定外键约束的话，先创建主表，再创建从表</p><p>（4）删表时，先删从表（或先删除外键约束），再删除主表</p><p>（5）当主表的记录被从表参照时，主表的记录将不允许删除，如果要删除数据，需要先删除从表中依赖 该记录的数据，然后才可以删除主表的数据</p><p>（6）<code>在“从表”中指定外键约束</code>，并且一个表可以建立多个外键约束</p><p>（7）从表的外键列与主表被参照的列名字可以不相同，但是数据类型必须一样，逻辑意义一致。如果类 型不一样，创建子表时，就会出现错误<code>“ERROR 1005 (HY000): Can&#39;t create table&#39;database.tablename&#39;(errno: 150)”</code>。</p><p>（9）删除外键约束后，必须 手动删除对应的索引</p><blockquote><p><strong>总结</strong>：</p><p>约束关系是针对双方的 添加了外键约束后，主表的修改和删除数据受约束</p><p>添加了外键约束后，从表的添加和修改数据受约束</p><p>在从表上建立外键，要求主表必须存在</p><p>删除主表时，要求从表从表先删除，或将从表中外键引用该主表的关系先删除</p></blockquote><p><strong>添加约束</strong></p><p>建表时：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> 主表名称<span class="token punctuation">(</span>\n字段<span class="token number">1</span>  数据类型  <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>\n字段<span class="token number">2</span>  数据类型\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n <span class="token keyword">create</span> <span class="token keyword">table</span> 从表名称<span class="token punctuation">(</span>\n字段<span class="token number">1</span>  数据类型  <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>\n字段<span class="token number">2</span>  数据类型<span class="token punctuation">,</span>\n <span class="token punctuation">[</span><span class="token keyword">CONSTRAINT</span> <span class="token operator">&lt;</span>外键约束名称<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span>（从表的某个字段<span class="token punctuation">)</span> <span class="token keyword">references</span> 主表名<span class="token punctuation">(</span>被参考字段<span class="token punctuation">)</span>\n <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>建表后：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 从表名 <span class="token keyword">ADD</span> <span class="token punctuation">[</span><span class="token keyword">CONSTRAINT</span> 约束名<span class="token punctuation">]</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>从表的字段<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> 主表名<span class="token punctuation">(</span>被引用\n字段<span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token keyword">on</span> <span class="token keyword">update</span> xx<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token keyword">on</span> <span class="token keyword">delete</span> xx<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>举例</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment"># 主表</span>\n<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> dept <span class="token punctuation">(</span>\n\tid <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">,</span>\n\tdept_name <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n\n<span class="token comment"># 从表</span>\n<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> emp <span class="token punctuation">(</span>\n\tid <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">,</span>\n\tname <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span> <span class="token operator">not</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n\tdept_id <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t<span class="token comment"># 增加外键</span>\n\t<span class="token keyword">CONSTRAINT</span> pk_dept_id <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span>  <span class="token punctuation">(</span>dept_id<span class="token punctuation">)</span> <span class="token keyword">REFERENCES</span> dept<span class="token punctuation">(</span>id<span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>约束等级</strong></p><p><code>Cascade方式</code> ：在父表上update/delete记录时，同步update/delete掉子表的匹配记录</p><p><code>Set null方式</code> ：在父表上update/delete记录时，将子表上匹配记录的列设为null，但是要注意子 表的外键列不能为not null</p><p><code> No action方式</code> ：如果子表中有匹配的记录，则不允许对父表对应候选键进行update/delete操作</p><p><code>Restrict方式</code> ：同no action， 都是立即检查外键约束</p><p><code>Set default方式</code> （在可视化工具SQLyog中可能显示空白）：父表有变更时，子表将外键列设置 成一个默认的值，但Innodb不能识别</p><blockquote><p>如果没有指定等级，就相当于Restrict方式</p><p>对于外键约束，最好是采用: <code>ON UPDATE CASCADE ON DELETE RESTRICT</code> 的方式</p><p>就是当主表更新时，子表跟着更新，主表删除时，如果子表有对应的数据，就不允许删除</p></blockquote><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> dept<span class="token punctuation">(</span>\n did <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>        \n dname <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span>           \n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n<span class="token keyword">create</span> <span class="token keyword">table</span> emp<span class="token punctuation">(</span>\n eid <span class="token keyword">int</span> <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span> \n ename <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span>     \n deptid <span class="token keyword">int</span><span class="token punctuation">,</span>\n <span class="token keyword">foreign</span> <span class="token keyword">key</span> <span class="token punctuation">(</span>deptid<span class="token punctuation">)</span> <span class="token keyword">references</span> dept<span class="token punctuation">(</span>did<span class="token punctuation">)</span>  <span class="token keyword">ON</span> <span class="token keyword">UPDATE</span> <span class="token keyword">CASCADE</span> <span class="token keyword">ON</span> <span class="token keyword">DELETE</span> <span class="token keyword">RESTRICT</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>删除外键约束</strong>：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment"># (1)第一步先查看约束名和删除外键约束</span>\n<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> information_schema<span class="token punctuation">.</span>table_constraints <span class="token keyword">WHERE</span> table_name <span class="token operator">=</span> <span class="token string">&#39;表名称&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 从表名 <span class="token keyword">DROP</span> <span class="token keyword">FOREIGN</span> <span class="token keyword">KEY</span> 外键约束名<span class="token punctuation">;</span>\n\n<span class="token comment"># （2）第二步查看索引名和删除索引。（注意，只能手动删除）</span>\n<span class="token keyword">SHOW</span> <span class="token keyword">INDEX</span> <span class="token keyword">FROM</span> 表名称<span class="token punctuation">;</span> <span class="token comment">#查看某个表的索引名</span>\n<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 从表名 <span class="token keyword">DROP</span> <span class="token keyword">INDEX</span> 索引名<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结</strong></p><p>在 MySQL 里，<code>外键约束是有成本的，需要消耗系统资源</code>。对于大并发的 SQL 操作，有可能会不适 合。比如大型网站的中央数据库，可能会 不允许你使用系统自带的外键约束，在 <code>因为外键约束的系统开销而变得非常慢</code>。所以， MySQL 允 应用层面完成检查数据一致性的逻辑。也就是说，即使你不 用外键约束，也要想办法通过应用层面的附加逻辑，来实现外键约束的功能，确保数据的一致性。</p><h3 id="_7-2-6-check约束" tabindex="-1"><a class="header-anchor" href="#_7-2-6-check约束"><span>7.2.6 CHECK约束</span></a></h3><p>检查某个字段的值是否符号xx要求，一般指的是值的范围</p><p><strong>关键字：</strong> CHECK</p><p>MySQL5.7 可以使用check约束，但check约束对数据验证没有任何作用。添加数据时，没有任何错误或警 告 但是MySQL 8.0中可以使用check约束了。</p><p><strong>添加约束</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token keyword">temp</span><span class="token punctuation">(</span>\n id <span class="token keyword">INT</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>\n NAME <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n age <span class="token keyword">INT</span> <span class="token keyword">CHECK</span><span class="token punctuation">(</span>age <span class="token operator">&gt;</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>\n <span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-7-default-约束" tabindex="-1"><a class="header-anchor" href="#_7-2-7-default-约束"><span>7.2.7 DEFAULT 约束</span></a></h3><p>给某个字段/某列指定默认值，一旦设置默认值，在插入数据时，如果此字段没有显式赋值，则赋值为默 认值</p><p>**关键字：**DEFAULT</p><p><strong>添加约束</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">table</span> 表名称<span class="token punctuation">(</span>\n字段名  数据类型  <span class="token keyword">primary</span> <span class="token keyword">key</span><span class="token punctuation">,</span>\n字段名  数据类型  <span class="token keyword">unique</span> <span class="token keyword">key</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">,</span>  \n字段名  数据类型  <span class="token keyword">unique</span> <span class="token keyword">key</span><span class="token punctuation">,</span>\n字段名  数据类型  <span class="token operator">not</span> <span class="token boolean">null</span> <span class="token keyword">default</span> 默认值<span class="token punctuation">,</span> \n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">alter</span> <span class="token keyword">table</span> 表名称 <span class="token keyword">modify</span> 字段名 数据类型 <span class="token keyword">default</span> 默认值\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1>',127)],l={},o=(0,a(66262).A)(l,[["render",function(n,s){return(0,e.uX)(),(0,e.CE)("div",null,t)}]]),c=JSON.parse('{"path":"/MySQL/07%E7%BA%A6%E6%9D%9F.html","title":"七、 约束","lang":"zh-CN","frontmatter":{"date":"2024-03-28T00:00:00.000Z","category":["数据库"],"tag":["数据库","MySQL"],"editLink":false,"pageview":false,"sticky":true,"star":true,"order":7,"description":"七、 约束 7.1 约束概念 为什么需要约束？ 数据完整性（Data Integrity）是指数据的精确性（Accuracy）和可靠性（Reliability）。它是防止数据库中 存在不符合语义规定的数据和防止因错误信息的输入输出造成无效操作或错误信息而提出的。 为了保证数据的完整性，SQL规范以约束的方式对表数据进行额外的条件限制。从以下四个方面考虑...","head":[["meta",{"property":"og:url","content":"https://www.yzgc.top/MySQL/07%E7%BA%A6%E6%9D%9F.html"}],["meta",{"property":"og:site_name","content":"鲨瓜"}],["meta",{"property":"og:title","content":"七、 约束"}],["meta",{"property":"og:description","content":"七、 约束 7.1 约束概念 为什么需要约束？ 数据完整性（Data Integrity）是指数据的精确性（Accuracy）和可靠性（Reliability）。它是防止数据库中 存在不符合语义规定的数据和防止因错误信息的输入输出造成无效操作或错误信息而提出的。 为了保证数据的完整性，SQL规范以约束的方式对表数据进行额外的条件限制。从以下四个方面考虑..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-05T05:35:13.000Z"}],["meta",{"property":"article:author","content":"鲨瓜"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-05T05:35:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"七、 约束\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-05T05:35:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鲨瓜\\",\\"url\\":\\"https://www.yzgc.top\\"}]}"]]},"headers":[{"level":2,"title":"7.1 约束概念","slug":"_7-1-约束概念","link":"#_7-1-约束概念","children":[]},{"level":2,"title":"7.2 约束的分类","slug":"_7-2-约束的分类","link":"#_7-2-约束的分类","children":[{"level":3,"title":"7.2.1 非空约束","slug":"_7-2-1-非空约束","link":"#_7-2-1-非空约束","children":[]},{"level":3,"title":"7.2.2 唯一性约束","slug":"_7-2-2-唯一性约束","link":"#_7-2-2-唯一性约束","children":[]},{"level":3,"title":"7.2.3 主键约束","slug":"_7-2-3-主键约束","link":"#_7-2-3-主键约束","children":[]},{"level":3,"title":"7.2.4 自增列","slug":"_7-2-4-自增列","link":"#_7-2-4-自增列","children":[]},{"level":3,"title":"7.2.5 外键约束","slug":"_7-2-5-外键约束","link":"#_7-2-5-外键约束","children":[]},{"level":3,"title":"7.2.6 CHECK约束","slug":"_7-2-6-check约束","link":"#_7-2-6-check约束","children":[]},{"level":3,"title":"7.2.7 DEFAULT 约束","slug":"_7-2-7-default-约束","link":"#_7-2-7-default-约束","children":[]}]}],"git":{"createdTime":1712295313000,"updatedTime":1712295313000,"contributors":[{"name":"“杨照光”","email":"“yangzhaoguang@ciictec.com”","commits":1}]},"readingTime":{"minutes":11.55,"words":3464},"filePathRelative":"MySQL/07约束.md","localizedDate":"2024年3月28日","excerpt":"\\n<h2>7.1 约束概念</h2>\\n<p><strong>为什么需要约束？</strong></p>\\n<p>数据完整性（Data Integrity）是指数据的精确性（Accuracy）和可靠性（Reliability）。它是防止数据库中 存在不符合语义规定的数据和防止因错误信息的输入输出造成无效操作或错误信息而提出的。</p>\\n<p>为了保证数据的完整性，SQL规范以约束的方式对表数据进行额外的条件限制。从以下<code>四个方面</code>考虑：</p>\\n<ul>\\n<li>实体完整性（Entity Integrity） ：例如，同一个表中，不能存在两条完全相同无法区分的记录</li>\\n<li>域完整性（Domain Integrity） ：例如：年龄范围0-120，性别范围“男/女</li>\\n<li>引用完整性（Referential Integrity） ：例如：员工所在部门，在部门表中要能找到这个部门</li>\\n<li>用户自定义完整性（User-defined Integrity） ：例如：用户名唯一、密码不能为空等，本部门 经理的工资不得高于本部门职工的平均工资的5倍</li>\\n</ul>","autoDesc":true}')}}]);