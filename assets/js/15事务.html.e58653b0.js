"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[918],{66262:(e,n)=>{n.A=(e,n)=>{const s=e.__vccOpts||e;for(const[e,a]of n)s[e]=a;return s}},87571:(e,n,s)=>{s.r(n),s.d(n,{comp:()=>u,data:()=>m});var a=s(20641);const o=s.p+"assets/img/image-20240323170524930.466d0d61.png",l=s.p+"assets/img/image-20240323172453754.045e2eb0.png",i=s.p+"assets/img/image-20240323180805461.99cea76e.png",t=s.p+"assets/img/image-20240325222116848.9f5f0183.png",p=s.p+"assets/img/image-20240325222800349.955e7694.png",r=s.p+"assets/img/image-20240325223116404.fa356836.png",d=s.p+"assets/img/image-20240325230912020.5c9fa47a.png",c=[(0,a.Fv)('<h1 id="十五、事务" tabindex="-1"><a class="header-anchor" href="#十五、事务"><span>十五、事务</span></a></h1><h2 id="_15-1-事务概述" tabindex="-1"><a class="header-anchor" href="#_15-1-事务概述"><span>15.1 事务概述</span></a></h2><p>通过 <code>show engines</code> 可以查看支持事务的执行引擎</p><figure><img src="'+o+'" alt="image-20240323170524930" tabindex="0" loading="lazy"><figcaption>image-20240323170524930</figcaption></figure><p><strong>事务</strong>：一组逻辑操作单元，使数据从一种状态变换到另一种状态，要么都执行，要么都不执行</p><p><strong>ACID四个特性</strong></p><p><strong>原子性（atomicity）</strong>： 原子性是指事务是一个不可分割的工作单位，要么全部提交，要么全部失败回滚。</p><p><strong>一致性（consistency）</strong>：</p><p>一致性是指事务执行前后，数据从一个 <code>合法性状态</code> 变换到另外一个 <code>合法性状态</code>。这种状态 是语义上的而不是语法上的，跟具体的业务有关。</p><p><strong>举例1</strong>: A账户有200元，转账300元出去，此时A账户余额为-100元。你自然就发现了此时数据是不一致的，为什么呢?因为你定义了一个状态，余额这列必须&gt;=0。</p><p><strong>举例2</strong>: A账户200元，转账50元给B账户，A账户的钱扣了，但是B账户因为各种意外，余额并没有增加。你也知道此时数据是不一致的，为什么呢?因为你定义了一个状态，要求A+B的总余额必须不变。</p><p><strong>隔离性</strong></p><p>事务的隔离性是指<code>一个事务的执行 不能被其他事务干扰</code>，即一个事务内部的操作及使用的数据对 并发的 其他事务是隔离的，并发执行的各个事务之间不能互相干扰</p><p><strong>持久性</strong></p><p>持久性是指一个事务一旦被提交，它对数据库中数据的改变就是 永久性的，接下来的其他操作和数据库 故障不应该对其有任何影响。</p><h2 id="_15-3-事务的状态" tabindex="-1"><a class="header-anchor" href="#_15-3-事务的状态"><span>15.3 事务的状态</span></a></h2><p>我们现在知道 事务是一个抽象的概念，它其实对应着一个或多个数据库操作，MySQL根据这些操作所执 行的不同阶段把 事务大致划分成几个状态：</p><p><strong>活动的（active）</strong></p><p>事务对应的数据库操作正在执行过程中时，我们就说该事务处在 <code>活跃的</code> 状态</p><p><strong>部分提交的（partially committed）</strong></p><p>当事务中的最后一个操作执行完成，但由于操作都在内存中执行，所造成的影响并没有刷新到磁盘 时，我们就说该事务处在 部分提交的状态。</p><p><strong>失败的（failed）</strong></p><p>当事务处在 活动的或者 没有刷新到磁盘 部分提交的状态时，可能遇到了某些错误（数据库自身的错误、操作系统 错误或者直接断电等）而无法继续执行，或者人为的停止当前事务的执行，我们就说该事务处在 失 败的状态。</p><p><strong>中止的（aborted）</strong></p><p>如果事务执行了一部分而变为 失败的状态，那么就需要把已经修改的事务中的操作还原到事务执 行前的状态。换句话说，就是要撤销失败事务对当前数据库造成的影响。我们把这个撤销的过程称 之为回滚。回滚操作执行完毕时，也就是数据库恢复到了执行事务之前的状态，我们就说该事 务处在了<code>中止的（aborted）</code></p><p><strong>提交的（committed）</strong></p><p>当一个处在 部分提交的状态的事务将修改过的数据都处 在了<code>提交的状态。</code></p><figure><img src="'+l+'" alt="image-20240323172453754" tabindex="0" loading="lazy"><figcaption>image-20240323172453754</figcaption></figure><h2 id="_15-4-如何使用事务" tabindex="-1"><a class="header-anchor" href="#_15-4-如何使用事务"><span>15.4 如何使用事务</span></a></h2><h3 id="_15-4-1-显示事务" tabindex="-1"><a class="header-anchor" href="#_15-4-1-显示事务"><span>15.4.1 显示事务</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">BEGIN</span><span class="token punctuation">;</span>\n <span class="token comment">#或者</span>\nmysql<span class="token operator">&gt;</span> <span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>START TRANSACTION 语句相较于 BEGIN 特别之处在于，后边能跟随几个 <code>修饰符</code>：</p><p><strong>① READ ONLY</strong>：标识当前事务是一个 <code>只读事务</code> 。也就是属于该事务的数据库操作只能读取数据，而不能修改数据</p><p><strong>② READ WRITE</strong>标识当前事务是一个 读写事务，也就是属于该事务的数据库操作既可以读取数据， 也可以修改数据</p><p><strong>③ WITH CONSISTENT SNAPSHOT</strong> ：启动一致性读。</p><p>如果不指明，默认是 <code>读写事务</code></p><h3 id="_15-4-2-隐式事务" tabindex="-1"><a class="header-anchor" href="#_15-4-2-隐式事务"><span>15.4.2 隐式事务</span></a></h3><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment"># 使用下面语句查看自动提交是否关闭</span>\n<span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;autocommit&#39;</span>\n <span class="token operator">+</span><span class="token comment">---------------+-------+</span>\n <span class="token operator">|</span> Variable_name <span class="token operator">|</span> <span class="token keyword">Value</span> <span class="token operator">|</span>\n <span class="token operator">+</span><span class="token comment">---------------+-------+</span>\n <span class="token operator">|</span> autocommit    <span class="token operator">|</span> <span class="token keyword">ON</span>    <span class="token operator">|</span>\n <span class="token operator">+</span><span class="token comment">---------------+-------+</span>\n <span class="token number">1</span> <span class="token keyword">row</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，如果我们想关闭这种 自动提交的功能，可以使用下边两种方法之一</p><ul><li>显式的的使用 START TRANSACTION 或者 BEGIN 语句开启一个事务。这样在本次事务提交或者回 滚前会暂时关闭掉自动提交的功能。</li><li>把系统变量 autocommit 的值设置为 OFF ，就像这样：</li></ul><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code> <span class="token keyword">SET</span> autocommit <span class="token operator">=</span> <span class="token keyword">OFF</span><span class="token punctuation">;</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_15-5-事务的隔离级别" tabindex="-1"><a class="header-anchor" href="#_15-5-事务的隔离级别"><span>15.5 事务的隔离级别</span></a></h2><p><strong>数据并发的问题：</strong></p><p>1、<strong>脏写（ Dirty Write ）</strong></p><p>如果事务<code>Session A 修改了</code>另一个 <code>未提交事务</code> Session B 修改过的数据，那就意味着发生了 <code>脏写</code></p><p><strong>2、脏读（ Dirty Read ）</strong></p><p>Session A 读取了已经被 Session B <code>更新但还没有被提交的字段</code>。之后若是SessionB回滚， Session A 读取的内容就是 <code>临时且无效的</code>。</p><p><strong>3、不可重复读（ Non Repeatable Read ）</strong></p><p>Session A 读取了一个字段，然后 Session B 更新了该字段。之后， Session A 再次读取同一个字段， 值就不同了。那就意味着发生了不可重复读。</p><p><strong>4、幻读（ Phantom ）</strong></p><p>Session A 从一个表中读取了一个字段, 然后 Session B 在该表中 <code>插入</code>入了一些新的行。 之后, 如果 Session A 再次读取 同一个表就会多出来几行，这种现象称为<code>幻读</code>，多出来的记录称为: <code>幻影记录</code></p><p>上面介绍了几种并发事务执行过程中可能遇到的一些问题，这些问题有轻重缓急之分，我们给这些问题 按照严重性来排一下序：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>脏写 <span class="token operator">&gt;</span> 脏读 <span class="token operator">&gt;</span> 不可重复读 <span class="token operator">&gt;</span> 幻读\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>隔离级别越低，并 发问题发生的就越多。 SQL标准 中设立了4个 隔离级别：</p><p><strong>READ UNCOMMITTED</strong> 读未提交，在该隔离级别，所有事务都可以看到其他未提交事务的执行结 果。不能避免脏读、不可重复读、幻读。</p><p>**READ COMMITTED **读已提交，一个事务只能看见已经提交事务所做 的改变。这是大多数数据库系统的默认隔离级别（但不是MySQL默认的）。可以避免脏读，但不可 重复读、幻读问题仍然存在。</p><p>**REPEATABLE READ **可重复读，事务A在读到一条数据之后，此时事务B对该数据进行了修改并提 交，那么事务A再读该数据，读到的还是原来的内容。可以避免脏读、不可重复读，但幻读问题仍 然存在。这是MySQL的默认隔离级别。</p><p><strong>SERIALIZABLE</strong>：可串行化，确保事务可以从一个表中读取相同的行。在这个事务持续期间，禁止 其他事务对该表执行插入、更新和删除操作。所有的并发问题都可以避免，但性能十分低下。能避 免脏读、不可重复读和幻读</p><p>SQL标准 中规定，针对不同的隔离级别，并发事务可以发生不同严重程度的问题，具体情况如下：</p><figure><img src="'+i+'" alt="image-20240323180805461" tabindex="0" loading="lazy"><figcaption>image-20240323180805461</figcaption></figure><p><strong>查看数据库默认的隔离级别</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;transaction_isolation&#39;</span><span class="token punctuation">;</span>\n或者\n<span class="token keyword">SELECT</span> @<span class="token variable">@transaction_isolation</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>设置隔离级别</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token punctuation">[</span><span class="token keyword">GLOBAL</span><span class="token operator">|</span><span class="token keyword">SESSION</span><span class="token punctuation">]</span> <span class="token keyword">TRANSACTION</span> <span class="token keyword">ISOLATION</span> <span class="token keyword">LEVEL</span> 隔离级别<span class="token punctuation">;</span>\n <span class="token comment">#其中，隔离级别格式：</span>\n<span class="token operator">&gt;</span> <span class="token keyword">READ</span> <span class="token keyword">UNCOMMITTED</span>\n <span class="token operator">&gt;</span> <span class="token keyword">READ</span> <span class="token keyword">COMMITTED</span>\n <span class="token operator">&gt;</span> <span class="token keyword">REPEATABLE</span> <span class="token keyword">READ</span>\n <span class="token operator">&gt;</span> <span class="token keyword">SERIALIZABLE</span>\n \n 或者\n \n <span class="token keyword">SET</span> <span class="token punctuation">[</span><span class="token keyword">GLOBAL</span><span class="token operator">|</span><span class="token keyword">SESSION</span><span class="token punctuation">]</span> TRANSACTION_ISOLATION <span class="token operator">=</span> <span class="token string">&#39;隔离级别&#39;</span>\n <span class="token comment">#其中，隔离级别格式：</span>\n<span class="token operator">&gt;</span> <span class="token keyword">READ</span><span class="token operator">-</span><span class="token keyword">UNCOMMITTED</span>\n <span class="token operator">&gt;</span> <span class="token keyword">READ</span><span class="token operator">-</span><span class="token keyword">COMMITTED</span>\n <span class="token operator">&gt;</span> <span class="token keyword">REPEATABLE</span><span class="token operator">-</span><span class="token keyword">READ</span>\n <span class="token operator">&gt;</span> <span class="token keyword">SERIALIZABLE</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关于设置时使用GLOBAL或SESSION的影响</strong>：</p><ul><li>使用G LOBAL 关键字（在全局范围影响）： <ul><li>当前已经存在的会话无效</li><li>只对执行完该语句之后产生的会话起作用</li></ul></li><li>使用S ESSION 关键字（在会话范围影响）： <ul><li>对当前会话的所有后续的事务有效</li><li>如果在事务之间执行，则对后续的事务有效</li><li>该语句可以在已经开启的事务中间执行，但不会影响当前正在执行的事务</li></ul></li></ul><h2 id="_15-6-事务日志" tabindex="-1"><a class="header-anchor" href="#_15-6-事务日志"><span>15.6 事务日志</span></a></h2><p>事务有4种特性：原子性、一致性、隔离性和持久性。那么事务的四种特性到底是基于什么机制实现呢？</p><ul><li><p>事务的隔离性由 <code>锁机制</code>实现。</p></li><li><p>而事务的原子性、一致性和持久性由事务的 <code>redo </code>日志和<code>undo </code>日志来保证。</p><ul><li><code>REDO LOG</code> 称为 重做日志，提供再写入操作，恢复提交事务修改的页操作，用来保证事务的<code>持 久性</code>。</li><li><code>UNDO LOG</code> 称为 回滚日志，回滚行记录到某个特定版本，用来保证事务的<code>原子性、一致性</code>。</li></ul></li><li><p>REDO 和 UNDO 日志都被视作一种<code>恢复操作</code>，UNDO 很好理解，回滚之后进行恢复。而 REDO日志是如何恢复呢？</p><ul><li>首先要知道在修改数据时，会先从磁盘读取数据保存到内存中，修改的数据是内存中的数据，事后还需要刷新回磁盘，但是假设在刷新的过程中出现了宕机等异常，导致没有刷新成功，那么就会<strong>记录在 REDO 日志中，当服务器重启时，会从REDO日志中读取数据刷新到磁盘中</strong>。</li></ul></li></ul><h3 id="_15-6-1-redo-日志" tabindex="-1"><a class="header-anchor" href="#_15-6-1-redo-日志"><span>15.6.1 redo 日志</span></a></h3><h4 id="_1-为什么需要-redo-日志呢" tabindex="-1"><a class="header-anchor" href="#_1-为什么需要-redo-日志呢"><span>（1）为什么需要 redo 日志呢？</span></a></h4><ul><li>一方面，MySQL采用<code>checkpoint</code>机制保证数据最终会被刷新到磁盘上，但是由于 <code>checkpoint 是定期刷新</code>, 所以最坏的情 况就是事务提交后，刚写完缓冲池，数据库宕机了，那么这段数据就是丢失的，无法恢复。</li><li>另一方面，事务包含 <code>持久性</code>的特性，就是说对于一个已经提交的事务，在事务提交后即使系统发生了崩 溃，这个事务对数据库中所做的更改也不能丢失。</li></ul><p>那么如何保证持久性呢，最暴力的一个办法就是 <code>实时更新</code>，我只要更改内存中的数据我就刷新回磁盘, 但通常来说暴力方法都是不可取的，有俩个问题：</p><ul><li><strong>修正量与刷新磁盘工作量严重不符</strong><ul><li>磁盘与内存交互的基本单位是<code>页</code>，默认的页大小为 16KB，假设你只修改 1b 的数据，那么也要将这 16KB的数据刷新回磁盘</li></ul></li><li><strong>随机IO刷新慢</strong><ul><li>一个事务可能包含很多语句，即使是一条语句也可能修改许多页面，假如该事务修改的这些页面可能并不相邻，这就意味着在将某个事务修改的Bufer Pool中的页面 刷新到磁盘 时，需要进行很多的 随机I0，随机I0比顺序I0要慢，尤其对于传统的机械硬盘来说</li></ul></li></ul><p><strong>另一个解决方案就是 REDO 日志</strong>, 不用把整个页的数据都刷新回磁盘，只需要记录一下被修改数据的偏移量即可。比如：，某个事务将系统表空间中 第10号 页面中偏移量为 100 处的那个字节的值 1 改成2。</p><h4 id="_2-好处、特点" tabindex="-1"><a class="header-anchor" href="#_2-好处、特点"><span>（2）好处、特点</span></a></h4><p><strong>好处</strong></p><ul><li>redo日志降低了刷盘频率</li><li>redo日志占用的空间非常小</li></ul><p><strong>特点</strong></p><ul><li>redo日志是顺序写入磁盘的</li><li>事务执行过程中，redo log不断记录</li></ul><h4 id="_3-redo组成" tabindex="-1"><a class="header-anchor" href="#_3-redo组成"><span>（3）redo组成</span></a></h4><p>Redo log可以简单分为以下两个部分：</p><ul><li><strong>重做日志的缓冲 (redo log buffer)</strong> ，保存在内存中，是易失的。</li><li><strong>重做日志文件 (redo log file)</strong> ，保存在硬盘中，是持久的。</li></ul><p>redo log buffer 大小，默认 16M ，最大值是4096M，最小值为1M</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;%innodb_log_buffer_size%&#39;</span><span class="token punctuation">;</span>\n <span class="token operator">+</span><span class="token comment">------------------------+----------+</span>\n <span class="token operator">|</span> Variable_name          <span class="token operator">|</span> <span class="token keyword">Value</span>    <span class="token operator">|</span>\n <span class="token operator">+</span><span class="token comment">------------------------+----------+</span>\n <span class="token operator">|</span> innodb_log_buffer_size <span class="token operator">|</span> <span class="token number">16777216</span> <span class="token operator">|</span>\n <span class="token operator">+</span><span class="token comment">------------------------+----------+</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-redo整体流程" tabindex="-1"><a class="header-anchor" href="#_4-redo整体流程"><span>（4）redo整体流程</span></a></h4><figure><img src="'+t+'" alt="image-20240325222116848" tabindex="0" loading="lazy"><figcaption>image-20240325222116848</figcaption></figure><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>第<span class="token number">1</span>步：先将原始数据从磁盘中读入内存中来，修改数据的内存拷贝\n第<span class="token number">2</span>步：生成一条重做日志并写入redo log buffer，记录的是数据被修改后的值\n第<span class="token number">3</span>步：当事务<span class="token keyword">commit</span>时，将redo log buffer中的内容刷新到 redo log <span class="token keyword">file</span>，对 redo log <span class="token keyword">file</span>采用追加写的方式\n第<span class="token number">4</span>步：定期将内存中修改的数据刷新到磁盘中\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-redo-刷盘策略" tabindex="-1"><a class="header-anchor" href="#_5-redo-刷盘策略"><span>（5）redo 刷盘策略</span></a></h4><p>redo log的写入并不是直接写入磁盘的，InnoDB引擎会在写redo log的时候先写redo log buffer，之后以 <code>一定的频率</code>刷入到真正的redo log file 中。这里的一定频率怎么看待呢？这就是我们要说的刷盘策略。</p><figure><img src="'+p+'" alt="image-20240325222800349" tabindex="0" loading="lazy"><figcaption>image-20240325222800349</figcaption></figure><p>注意，redo log buffer刷盘到redo log file的过程并不是真正的刷到磁盘中去，只是刷入到 <code>文件系统缓存 （page cache）</code>中去（这是现代操作系统为了提高文件写入效率做的一个优化），真正的写入会交给<code>系 统自己来决定</code>（比如page cache足够大了）。那么对于InnoDB来说就存在一个问题，如果交给系统来同 步，同样如果系统宕机，那么数据也丢失了（虽然整个系统宕机的概率还是比较小的）。</p><p>针对这种情况，InnoDB给出 <code>innodb_flush_log_at_trx_commit</code> 参数，该参数控制 commit提交事务 时，如何将 redo log buffer 中的日志刷新到 redo log file 中。它支持三种策略：</p><ul><li><code>设置为0</code> ：表示每次事务提交时不进行刷盘操作。（系统默认master thread每隔1s进行一次重做日 志的同步）</li><li><code>设置为1</code> ：表示每次事务提交时都将进行同步，刷盘操作（ <code>默认值</code>）</li><li><code>设置为2</code>：表示每次事务提交时都只把 redo log buffer 内容写入 page cache，不进行同步。由<code>os自 己决定什么时候同步到磁盘文件</code>。</li></ul><p>另外，InnoDB存储引擎有一个后台线程，<code>每隔1 秒</code>，就会把 redo log buffer 中的内容写到文件系统缓存(page cache)，然后调用刷盘操作。</p><figure><img src="'+r+'" alt="image-20240325223116404" tabindex="0" loading="lazy"><figcaption>image-20240325223116404</figcaption></figure><h3 id="_15-6-2-undo-日志" tabindex="-1"><a class="header-anchor" href="#_15-6-2-undo-日志"><span>15.6.2 undo 日志</span></a></h3><p>redo log是事务持久性的保证，undo log是事务原子性的保证。在事务中 更新数据的 前置操作其实是要 先写入一个 undo log 。</p><h4 id="_1-如何理解undo日志" tabindex="-1"><a class="header-anchor" href="#_1-如何理解undo日志"><span>（1）如何理解undo日志</span></a></h4><p>事务需要保证 原子性，也就是事务中的操作要么全部完成，要么什么也不做。但有时候事务执行到一半 会出现一些情况，比如：</p><ul><li>情况一：事务执行过程中可能遇到各种错误，比如 <code>服务器本身的错误</code>， <code>操作系统错误</code>，甚至是<code>突然断电</code>导致的错误。</li><li>情况二：程序员可以在事务执行过程中手动输入<code>ROLLBACK</code>语句结束当前事务的执行。</li></ul><p>以上情况出现，我们需要把数据改回原先的样子，这个过程称之为 <code>回滚</code>，这样就可以造成一个假象：这 个事务看起来什么都没做，所以符合 <code>原子性</code>要求。</p><p>每当我们要对一条记录做改动(这里的 改动 可以指 INSERT、DELETE、UPDATE)，时。都需要“<code>留一手</code>&quot;-- 把回滚时所需的东西记下来,比如:</p><ul><li>·你插入一条记录 时，至少要把这条记录的主键值记下来，之后回滚的时候只需要把这个<code>主键值</code>对应的 记录删掉 就好了。(对于每个INSERT，InnoDB存储引擎会完成一个DELETE)</li><li>你删除了一条记录 ，至少要把这条记录中的<code>内容</code>都记下来，这样之后回滚时再把由这些内容组成的记录 插入到表中就好了。(对于每个DELETE，InnoDB存储引擎会执行一个INSERT)</li><li>你 修改了一条记录 ，至少要把修改这条记录前的<code>旧值</code>都记录下来，这样之后回滚时再把这条记录 更新为旧值 就好了。(对于每个UPDATE，InnoDB存储引擎会执行一个相反的UPDATE，将修改前的行放回去)</li></ul><p>此外，undo log会产生redo log，也就是<strong>undo log的产生会伴随着redo log的产生</strong>，这是因为undo log也需要持久性的保护。</p><h4 id="_2-undo日志的作用" tabindex="-1"><a class="header-anchor" href="#_2-undo日志的作用"><span>（2）undo日志的作用</span></a></h4><ul><li><p>作用1：回滚数据</p></li><li><p>作用2：MVCC</p><ul><li>undo的另一个作用是MVCC，即在InnoDB存储引擎中MVCC的实现是通过undo来完成。当用户读取一行记录时，若该记录已经被其他事务占用，当前事务可以通过undo读取之前的行版本信息，以此实现非锁定读取。</li></ul></li></ul><h4 id="_3-undo-日志生命周期" tabindex="-1"><a class="header-anchor" href="#_3-undo-日志生命周期"><span>（3）undo 日志生命周期</span></a></h4><p>以下是undo+redo事务的简化过程假设有2个数值，分别为A=1和B=2，然后将A修改为3，B修改为4</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>1.start transaction;\n2.记录 A=1 到undo log;\n3.update A= 3;\n4.记录 A=3 到redo log;\n\n5.记录 B=2 到undo log;\n6.update B= 4;\n7.记录B=4 到redo log:\n\n8.将redo log刷新到磁盘\n9.commit\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>在1-8步骤的任意一步系统宕机，事务未提交，该事务就不会对磁上的数据做任何影响。</p></li><li><p>如果在8-9之间宕机，恢复之后可以选择回滚，也可以选择继续完成事务提交，因为此时redo log已经持久化,</p></li><li><p>若在9之后系统宕机，内存映射中变更的数据还来不及刷回磁盘，那么系统恢复之后，可以根据redo log把数据刷回磁盘。</p></li></ul><figure><img src="'+d+'" alt="image-20240325230912020" tabindex="0" loading="lazy"><figcaption>image-20240325230912020</figcaption></figure>',112)],g={},u=(0,s(66262).A)(g,[["render",function(e,n){return(0,a.uX)(),(0,a.CE)("div",null,c)}]]),m=JSON.parse('{"path":"/MySQL/15%E4%BA%8B%E5%8A%A1.html","title":"十五、事务","lang":"zh-CN","frontmatter":{"date":"2024-03-28T00:00:00.000Z","category":["数据库"],"tag":["数据库","MySQL"],"editLink":false,"pageview":false,"sticky":true,"star":true,"order":15,"description":"十五、事务 15.1 事务概述 通过 show engines 可以查看支持事务的执行引擎 image-20240323170524930image-20240323170524930 事务：一组逻辑操作单元，使数据从一种状态变换到另一种状态，要么都执行，要么都不执行 ACID四个特性 原子性（atomicity）： 原子性是指事务是一个不可分割的工作...","head":[["meta",{"property":"og:url","content":"https://www.yzgc.top/MySQL/15%E4%BA%8B%E5%8A%A1.html"}],["meta",{"property":"og:site_name","content":"鲨瓜"}],["meta",{"property":"og:title","content":"十五、事务"}],["meta",{"property":"og:description","content":"十五、事务 15.1 事务概述 通过 show engines 可以查看支持事务的执行引擎 image-20240323170524930image-20240323170524930 事务：一组逻辑操作单元，使数据从一种状态变换到另一种状态，要么都执行，要么都不执行 ACID四个特性 原子性（atomicity）： 原子性是指事务是一个不可分割的工作..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-05T05:35:13.000Z"}],["meta",{"property":"article:author","content":"鲨瓜"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-05T05:35:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"十五、事务\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-05T05:35:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鲨瓜\\",\\"url\\":\\"https://www.yzgc.top\\"}]}"]]},"headers":[{"level":2,"title":"15.1 事务概述","slug":"_15-1-事务概述","link":"#_15-1-事务概述","children":[]},{"level":2,"title":"15.3 事务的状态","slug":"_15-3-事务的状态","link":"#_15-3-事务的状态","children":[]},{"level":2,"title":"15.4 如何使用事务","slug":"_15-4-如何使用事务","link":"#_15-4-如何使用事务","children":[{"level":3,"title":"15.4.1 显示事务","slug":"_15-4-1-显示事务","link":"#_15-4-1-显示事务","children":[]},{"level":3,"title":"15.4.2 隐式事务","slug":"_15-4-2-隐式事务","link":"#_15-4-2-隐式事务","children":[]}]},{"level":2,"title":"15.5 事务的隔离级别","slug":"_15-5-事务的隔离级别","link":"#_15-5-事务的隔离级别","children":[]},{"level":2,"title":"15.6 事务日志","slug":"_15-6-事务日志","link":"#_15-6-事务日志","children":[{"level":3,"title":"15.6.1 redo 日志","slug":"_15-6-1-redo-日志","link":"#_15-6-1-redo-日志","children":[]},{"level":3,"title":"15.6.2 undo 日志","slug":"_15-6-2-undo-日志","link":"#_15-6-2-undo-日志","children":[]}]}],"git":{"createdTime":1712295313000,"updatedTime":1712295313000,"contributors":[{"name":"“杨照光”","email":"“yangzhaoguang@ciictec.com”","commits":1}]},"readingTime":{"minutes":14.7,"words":4411},"filePathRelative":"MySQL/15事务.md","localizedDate":"2024年3月28日","excerpt":"\\n<h2>15.1 事务概述</h2>\\n<p>通过 <code>show engines</code> 可以查看支持事务的执行引擎</p>\\n<figure><figcaption>image-20240323170524930</figcaption></figure>\\n<p><strong>事务</strong>：一组逻辑操作单元，使数据从一种状态变换到另一种状态，要么都执行，要么都不执行</p>\\n<p><strong>ACID四个特性</strong></p>\\n<p><strong>原子性（atomicity）</strong>： 原子性是指事务是一个不可分割的工作单位，要么全部提交，要么全部失败回滚。</p>","autoDesc":true}')}}]);