"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[9170],{66262:(n,a)=>{a.A=(n,a)=>{const s=n.__vccOpts||n;for(const[n,e]of a)s[n]=e;return s}},65320:(n,a,s)=>{s.r(a),s.d(a,{comp:()=>f,data:()=>v});var e=s(20641);const p=s.p+"assets/img/image-20240309164149462.7b2772f3.png",t=s.p+"assets/img/image-20240309164615169.8adf724b.png",o=s.p+"assets/img/image-20240309164803163.9e4ec590.png",i=s.p+"assets/img/image-20240309164857546.4f7adad6.png",c=s.p+"assets/img/image-20240309170452315.7a6df99b.png",r=s.p+"assets/img/image-20240309174017828.2417880c.png",l=s.p+"assets/img/image-20240309175046593.cca1eb05.png",d=s.p+"assets/img/image-20240309172255360.f8ad918a.png",g=s.p+"assets/img/image-20240309172420461.a1a771e7.png",u=s.p+"assets/img/image-20240309172436494.6dbb7c18.png",m=s.p+"assets/img/image-20240309172929988.7f2329c2.png",k=s.p+"assets/img/image-20240309173013323.bc5f6d6e.png",h=s.p+"assets/img/image-20240309174802116.1904cc34.png",_=[(0,e.Fv)('<h1 id="十、-innodb数据存储结构" tabindex="-1"><a class="header-anchor" href="#十、-innodb数据存储结构"><span>十、 InnoDB数据存储结构</span></a></h1><h2 id="_10-1-磁盘与内存交互的基本单位-页" tabindex="-1"><a class="header-anchor" href="#_10-1-磁盘与内存交互的基本单位-页"><span>10.1 磁盘与内存交互的基本单位: 页</span></a></h2><p>InnoDB 将数据划分为若干个页，InnoDB中页的大小默认为 <code>16KB</code></p><p>以<code> 页</code> 作为磁盘和内存之间交豆的 <code>基本单位</code>，也就是一次最少从磁盘中读取16KB的内容到内存中，一次最少把内存中的16KB内容刷新到磁盘中。也就是说，<strong>在数据库中，不论读一行，还是读多行，都是将这些行所在的页进行加载。也就是说，数据库管理存储空间的基本单位是页(Page)，数据库 I/0 操作的最小单位是页</strong>。一个页中可以存储多个行记录，</p><h2 id="_10-2-数据页的内部结构" tabindex="-1"><a class="header-anchor" href="#_10-2-数据页的内部结构"><span>10.2 数据页的内部结构</span></a></h2><p>页如果按类型划分的话，常见的有<code>数据页(保存 B+ 树节点)系统页、 Undo 页和 事务数据页 </code>等。数据页是我们最常使用的页。</p><p>数据页的 16KB大小的存储空间被划分为七个部分**，分别是文件头(File Header)、页头(Page Header)、最大页目录(Page最小记录(Infimum+supremum)、用户记录(User Records)、空闲空间(Free Space)、Directory)和文件尾(File Tailer)**。 页结构的示意图如下所示:</p><figure><img src="'+p+'" alt="image-20240309164149462" tabindex="0" loading="lazy"><figcaption>image-20240309164149462</figcaption></figure><h3 id="_10-2-1-文件头" tabindex="-1"><a class="header-anchor" href="#_10-2-1-文件头"><span>10.2.1 <strong>文件头</strong></span></a></h3><p>描述各种页的通用信息。（比如页的编号、其上一页、下一页是谁等）</p><p><strong>文件头内部组成</strong>：</p><figure><img src="'+t+'" alt="image-20240309164615169" tabindex="0" loading="lazy"><figcaption>image-20240309164615169</figcaption></figure><p><strong>FIL_PAGE_OFFSET（4字节）</strong></p><p>每一个页都有一个单独的页号，就跟你的身份证号码一样，InnoDB通过页号可以<code>唯一</code>定位一个页。</p><p><strong>FIL_PAGE_TYPE（2字节）</strong></p><p>这个代表当前页的类型。</p><figure><img src="'+o+'" alt="image-20240309164803163" tabindex="0" loading="lazy"><figcaption>image-20240309164803163</figcaption></figure><p><strong>FIL_PAGE_PREV（4字节）和FIL_PAGE_NEXT（4字节）</strong></p><p>InnoDB都是以页为单位存放数据的，如果数据分散到多个不连续的页中存储的话需要把这些页关联起来，FIL_PAGE_PREV和FIL_PAGE_NEXT就分别代表本页的上一个和下一个页的页号。这样<code>通过建立一个双向链表把许许多多的页就都串联起来了，保证这些页之间不需要是物理上的连续，而是逻辑上的连续</code>。</p><figure><img src="'+i+'" alt="image-20240309164857546" tabindex="0" loading="lazy"><figcaption>image-20240309164857546</figcaption></figure><p><strong>FIL_PAGE_SPACE_OR_CHKSUM（4字节）</strong></p><p>代表当前页面的校验和（checksum）。</p><p><strong>什么是校验和？</strong> 就是对于一个很长的字节串来说，我们会通过某种算法来计算一个比较短的值来代表这个很长的字节串，这个比较短的值就称为校验和。</p><p>在比较两个很长的字节串之前，先比较这两个长字节串的校验和，如果校验和都不一样，则两个长字节串肯定是不同的，所以省去了直接比较两个比较长的字节串的时间损耗。</p><p><strong>文件头部和文件尾部都有属性：FIL_PAGE_SPACE_OR_CHKSUM</strong></p><p><strong>作用</strong> InnoDB存储引擎以页为单位把数据加载到内存中处理，如果该页中的数据在内存中被修改了，那么在修改后的某个时间需要把数据同步到磁盘中。但是在同步了一半的时候断电了，造成了该页传输的不完整。</p><p>为了检测一个页是否完整（也就是在同步的时候有没有发生只同步一半的尴尬情况），这时可以<code>通过文件尾的校验和（checksum 值）与文件头的校验和做比对</code>，如果两个值不相等则证明页的传输有问题，需要重新进行传输，否则认为页的传输已经完成。</p><p><strong>FIL_PAGE_LSN（8字节）</strong></p><p>页面被最后修改时对应的日志序列位置（英文名是：Log Sequence Number）</p><h3 id="_10-2-2-文件尾" tabindex="-1"><a class="header-anchor" href="#_10-2-2-文件尾"><span>10.2.2 文件尾</span></a></h3><ul><li><p>前4个字节代表页的校验和：</p><ul><li>这个部分是和File Header中的校验和相对应的。</li></ul></li><li><p>后4个字节代表页面被最后修改时对应的日志序列位置（LSN）：</p><ul><li>这个部分也是为了校验页的完整性的，如果首部和尾部的LSN值校验不成功的话，就说明同步过程出现了问题。</li></ul></li></ul><h3 id="_10-2-3-free-space-空闲空间" tabindex="-1"><a class="header-anchor" href="#_10-2-3-free-space-空闲空间"><span>10.2.3 Free Space (空闲空间)</span></a></h3><p>我们自己存储的记录会按照指定的<strong>行格式</strong>存储到 User Records 部分。但是在一开始生成页的时候，其实并没有User Records这个部分，<strong>每当我们插入一条记录，都会从Free Space部分，也就是尚未使用的存储空间中申请一个记录大小的空间划分到User Records部分</strong>，当Free Space部分的空间全部被User Records部分替代掉之后，也就意味着这个页使用完了，如果还有新的记录插入的话，就需要去申请新的页了。</p><figure><img src="'+c+'" alt="image-20240309170452315" tabindex="0" loading="lazy"><figcaption>image-20240309170452315</figcaption></figure><h3 id="_10-2-4-user-records-用户记录" tabindex="-1"><a class="header-anchor" href="#_10-2-4-user-records-用户记录"><span>10.2.4 User Records (用户记录)</span></a></h3><p>User Records中的这些记录按照<strong>指定的行格式</strong>一条一条摆在User Records部分，相互之间形成单链表。</p><p>**用户记录里的一条条数据如何记录？**详情看COMPACT行格式中的记录头信息</p><h3 id="_10-2-5-infimum-supremum-最小最大记录" tabindex="-1"><a class="header-anchor" href="#_10-2-5-infimum-supremum-最小最大记录"><span>10.2.5 Infimum + Supremum（最小最大记录）</span></a></h3><p>记录可以比大小，对于一条完整的记录来说，比较记录的大小就是<code>比较主键的大小</code>。比方说我们插入的4行记录的主键值分别是：1、2、3、4，这也就意味着这4条记录是从小到大依次递增。</p><p>InnoDB规定的最小记录与最大记录这两条记录的构造十分简单，都是由5字节大小的记录头信息和8字节大小的一个固定的部分组成的，如图所示</p><figure><img src="'+r+'" alt="image-20240309174017828" tabindex="0" loading="lazy"><figcaption>image-20240309174017828</figcaption></figure><h3 id="_10-2-6-page-directory-页目录" tabindex="-1"><a class="header-anchor" href="#_10-2-6-page-directory-页目录"><span>10.2.6 Page Directory（页目录）</span></a></h3><p>为什么需要页目录？</p><p>在页中，记录是以<code>单向链表</code>的形式进行存储的。单向链表的特点就是<code>插入、删除非常方便，但是检索效率不高</code>，最差的情况下需要遍历链表上的所有节点才能完成检索。因此在页结构中专门设计了页目录这个模块，专门给记录做一个目录，通过二分查找法的方式进行检索，提升效率。</p><h3 id="_10-2-7-page-header-页面头部" tabindex="-1"><a class="header-anchor" href="#_10-2-7-page-header-页面头部"><span>10.2.7 Page Header（页面头部）</span></a></h3><p>为了能得到一个数据页中存储的记录的状态信息，比如本页中已经存储了多少条记录，第一条记录的地址是什么，页目录中存储了多少个槽等等，特意在页中定义了一个叫Page Header的部分，这个部分占用固定的56个字节，专门存储各种状态信息。</p><figure><img src="'+l+'" alt="image-20240309175046593" tabindex="0" loading="lazy"><figcaption>image-20240309175046593</figcaption></figure><h2 id="_10-3-innodb-行格式" tabindex="-1"><a class="header-anchor" href="#_10-3-innodb-行格式"><span>10.3 InnoDB 行格式</span></a></h2><p>我们平时的数据以行为单位来向表中插入数据，这些记录在磁盘上的存放方式也被称为<code>行格式</code>或者<code>记录格式</code>。InnoDB存储引擎设计了4种不同类型的<code>行格式</code>，分别是<code>Compact</code>、<code>Redundant</code>、<code>Dynamic</code>和<code>Compressed</code>行格式。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> @<span class="token variable">@innodb_default_row_format</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_10-3-1-指定行格式的语法" tabindex="-1"><a class="header-anchor" href="#_10-3-1-指定行格式的语法"><span>10.3.1 指定行格式的语法</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 创建表格时指定</span>\n<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> 表名 <span class="token punctuation">(</span>\n\n\n<span class="token punctuation">)</span> ROW_FORMAT<span class="token operator">=</span>行格式名称<span class="token punctuation">;</span>\n<span class="token comment">-- 创建表格后指定</span>\n<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> 表名 ROW_FORMAT<span class="token operator">=</span>行格式名称\n\n<span class="token comment">-- 举例</span>\n <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> record_test_table <span class="token punctuation">(</span>\n     col1 <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n     col2 <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>\n     col3 <span class="token keyword">CHAR</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n     col4 <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span>\n <span class="token punctuation">)</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>ascii ROW_FORMAT<span class="token operator">=</span>COMPACT<span class="token punctuation">;</span>\n \n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> record_test_table<span class="token punctuation">(</span>col1<span class="token punctuation">,</span> col2<span class="token punctuation">,</span> col3<span class="token punctuation">,</span> col4<span class="token punctuation">)</span> \n<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;zhangsan&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;lisi&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wangwu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;songhk&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;tong&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;chen&#39;</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token boolean">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-3-1-compact行格式" tabindex="-1"><a class="header-anchor" href="#_10-3-1-compact行格式"><span>10.3.1 COMPACT行格式</span></a></h3><p>在MySQL 5.1版本中，默认设置为Compact行格式。一条完整的记录其实可以被分为<code>记录的额外信息</code>和<code>记录的真实数据</code>两大部分。</p><figure><img src="'+d+'" alt="image-20240309172255360" tabindex="0" loading="lazy"><figcaption>image-20240309172255360</figcaption></figure><h4 id="变长字段长度列表" tabindex="-1"><a class="header-anchor" href="#变长字段长度列表"><span>变长字段长度列表</span></a></h4><p>MySQL支持一些变长的数据类型，比如VARCHAR(M)、VARBINARY(M)、TEXT类型，BLOB类型，这些数据类型修饰列称为变长字段，变长字段中存储多少字节的数据不是固定的，所以我们在存储真实数据的时候需要顺便把这些数据占用的字节数也存起来。<strong>在Compact行格式中，把所有变长字段的真实数据占用的字节长度都存放在记录的开头部位，从而形成一个变长字段长度列表</strong>。</p><h4 id="null值列表" tabindex="-1"><a class="header-anchor" href="#null值列表"><span>NULL值列表</span></a></h4><p>Compact行格式会把可以为NULL的列统一管理起来，存在一个标记为NULL值列表中。<strong>如果表中没有允许存储 NULL 的列，则 NULL值列表也不存在了</strong>。</p><h4 id="记录头像信息" tabindex="-1"><a class="header-anchor" href="#记录头像信息"><span>记录头像信息</span></a></h4><figure><img src="'+g+'" alt="image-20240309172420461" tabindex="0" loading="lazy"><figcaption>image-20240309172420461</figcaption></figure><p><strong>记录头信息中各个属性如下</strong>：</p><figure><img src="'+u+'" alt="image-20240309172436494" tabindex="0" loading="lazy"><figcaption>image-20240309172436494</figcaption></figure><p><strong>简化后的行格式示意图</strong>：</p><figure><img src="'+m+'" alt="image-20240309172929988" tabindex="0" loading="lazy"><figcaption>image-20240309172929988</figcaption></figure><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>插入数据：\n<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> page_demo \n<span class="token keyword">VALUES</span>\n<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&#39;song&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token string">&#39;tong&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token string">&#39;zhan&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> \n<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token string">&#39;lisi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示意图如下：</strong></p><figure><img src="'+k+'" alt="image-20240309173013323" tabindex="0" loading="lazy"><figcaption>image-20240309173013323</figcaption></figure><p><strong>delete_mask</strong></p><p>这个属性标记着当前记录是否被删除，占用1个二进制位。</p><ul><li>值为0：代表记录并没有被删除</li><li>值为1：代表记录被删除掉了</li></ul><p><strong>min_rec_mask</strong></p><p>B+树的每层非叶子节点中的最小记录都会添加该标记，min_rec_mask值为1。 我们自己插入的四条记录的min_rec_mask值都是0，意味着它们都不是B+树的非叶子节点中的最小记录。</p><p><strong>record_type</strong></p><p>这个属性表示当前记录的类型，一共有4种类型的记录： 0：表示普通记录 1：表示B+树非叶节点记录 2：表示最小记录 3：表示最大记录</p><p>从图中我们也可以看出来，我们自己插入的记录就是普通记录，它们的record_type值都是0，而最小记录和最大记录的record_type值分别为2和3。至于record_type为1的情况，我们在索引的数据结构章节讲过。</p><p><strong>heap_no</strong></p><p>这个属性表示当前记录在本页中的位置。</p><p>从图中可以看出来，我们插入的4条记录在本页中的位置分别是：2、3、4、5。</p><p><strong>怎么不见heap_no值为0和1的记录呢？</strong></p><p>MySQL会自动给每个页里加了两个记录，由于这两个记录并不是我们自己插入的，所以有时候也称为<code>伪记录或者虚拟记录</code>。这两个伪记录一个代表<code>最小记录</code>，一个代表<code>最大记录</code>。最小记录和最大记录的heap_no值分别是0和1，也就是说它们的位置最靠前。</p><p><strong>n_owned</strong></p><p>页目录中每个组中最后一条记录的头信息中会存储该组一共有多少条记录，作为 n_owned 字段。</p><p><strong>next_record</strong></p><p>记录头信息里该属性非常重要，它表示从当前记录的真实数据到<code>下一条记录的真实数据的地址偏移量</code>。 比如：第一条记录的next_record值为32，意味着从第一条记录的真实数据的地址处向后找32个字节便是下一条记录的真实数据。</p><h4 id="记录的真实数据" tabindex="-1"><a class="header-anchor" href="#记录的真实数据"><span>记录的真实数据</span></a></h4><p>记录的真实数据除了我们自己定义的列的数据以外，还会有三个隐藏列：</p><figure><img src="'+h+'" alt="image-20240309174802116" tabindex="0" loading="lazy"><figcaption>image-20240309174802116</figcaption></figure><p>实际上这几个列的真正名称其实是：<code>DB_ROW_ID、DB_TRX_ID、DB_ROLL_PTR</code>。</p><ul><li><p>一个表没有手动定义主键，则会选取一个Unique键作为主键，如果连Unique键都没有定义的话，则会为表默认添加一个名为row_id的隐藏列作为主键。所以row_id是在没有自定义主键以及Unique键的情况下才会存在的。</p></li><li><p>事务ID和回滚指针在后面的《第14章_MySQL事务日志》章节中讲解。</p></li></ul><h1 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h1>',91)],b={},f=(0,s(66262).A)(b,[["render",function(n,a){return(0,e.uX)(),(0,e.CE)("div",null,_)}]]),v=JSON.parse('{"path":"/MySQL/10InnoDB%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84.html","title":"十、 InnoDB数据存储结构","lang":"zh-CN","frontmatter":{"date":"2024-03-28T00:00:00.000Z","category":["数据库"],"tag":["数据库","MySQL"],"editLink":false,"pageview":false,"sticky":true,"star":true,"order":10,"description":"十、 InnoDB数据存储结构 10.1 磁盘与内存交互的基本单位: 页 InnoDB 将数据划分为若干个页，InnoDB中页的大小默认为 16KB 以 页 作为磁盘和内存之间交豆的 基本单位，也就是一次最少从磁盘中读取16KB的内容到内存中，一次最少把内存中的16KB内容刷新到磁盘中。也就是说，在数据库中，不论读一行，还是读多行，都是将这些行所在的页...","head":[["meta",{"property":"og:url","content":"https://www.yzgc.top/MySQL/10InnoDB%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84.html"}],["meta",{"property":"og:site_name","content":"鲨瓜"}],["meta",{"property":"og:title","content":"十、 InnoDB数据存储结构"}],["meta",{"property":"og:description","content":"十、 InnoDB数据存储结构 10.1 磁盘与内存交互的基本单位: 页 InnoDB 将数据划分为若干个页，InnoDB中页的大小默认为 16KB 以 页 作为磁盘和内存之间交豆的 基本单位，也就是一次最少从磁盘中读取16KB的内容到内存中，一次最少把内存中的16KB内容刷新到磁盘中。也就是说，在数据库中，不论读一行，还是读多行，都是将这些行所在的页..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-05T05:35:13.000Z"}],["meta",{"property":"article:author","content":"鲨瓜"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-05T05:35:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"十、 InnoDB数据存储结构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-05T05:35:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鲨瓜\\",\\"url\\":\\"https://www.yzgc.top\\"}]}"]]},"headers":[{"level":2,"title":"10.1 磁盘与内存交互的基本单位: 页","slug":"_10-1-磁盘与内存交互的基本单位-页","link":"#_10-1-磁盘与内存交互的基本单位-页","children":[]},{"level":2,"title":"10.2 数据页的内部结构","slug":"_10-2-数据页的内部结构","link":"#_10-2-数据页的内部结构","children":[{"level":3,"title":"10.2.1 文件头","slug":"_10-2-1-文件头","link":"#_10-2-1-文件头","children":[]},{"level":3,"title":"10.2.2 文件尾","slug":"_10-2-2-文件尾","link":"#_10-2-2-文件尾","children":[]},{"level":3,"title":"10.2.3 Free Space (空闲空间)","slug":"_10-2-3-free-space-空闲空间","link":"#_10-2-3-free-space-空闲空间","children":[]},{"level":3,"title":"10.2.4 User Records (用户记录)","slug":"_10-2-4-user-records-用户记录","link":"#_10-2-4-user-records-用户记录","children":[]},{"level":3,"title":"10.2.5 Infimum + Supremum（最小最大记录）","slug":"_10-2-5-infimum-supremum-最小最大记录","link":"#_10-2-5-infimum-supremum-最小最大记录","children":[]},{"level":3,"title":"10.2.6 Page Directory（页目录）","slug":"_10-2-6-page-directory-页目录","link":"#_10-2-6-page-directory-页目录","children":[]},{"level":3,"title":"10.2.7 Page Header（页面头部）","slug":"_10-2-7-page-header-页面头部","link":"#_10-2-7-page-header-页面头部","children":[]}]},{"level":2,"title":"10.3 InnoDB 行格式","slug":"_10-3-innodb-行格式","link":"#_10-3-innodb-行格式","children":[{"level":3,"title":"10.3.1 指定行格式的语法","slug":"_10-3-1-指定行格式的语法","link":"#_10-3-1-指定行格式的语法","children":[]},{"level":3,"title":"10.3.1 COMPACT行格式","slug":"_10-3-1-compact行格式","link":"#_10-3-1-compact行格式","children":[]}]}],"git":{"createdTime":1712295313000,"updatedTime":1712295313000,"contributors":[{"name":"“杨照光”","email":"“yangzhaoguang@ciictec.com”","commits":1}]},"readingTime":{"minutes":9.68,"words":2904},"filePathRelative":"MySQL/10InnoDB数据存储结构.md","localizedDate":"2024年3月28日","excerpt":"\\n<h2>10.1 磁盘与内存交互的基本单位: 页</h2>\\n<p>InnoDB 将数据划分为若干个页，InnoDB中页的大小默认为 <code>16KB</code></p>\\n<p>以<code> 页</code> 作为磁盘和内存之间交豆的 <code>基本单位</code>，也就是一次最少从磁盘中读取16KB的内容到内存中，一次最少把内存中的16KB内容刷新到磁盘中。也就是说，<strong>在数据库中，不论读一行，还是读多行，都是将这些行所在的页进行加载。也就是说，数据库管理存储空间的基本单位是页(Page)，数据库 I/0 操作的最小单位是页</strong>。一个页中可以存储多个行记录，</p>","autoDesc":true}')}}]);