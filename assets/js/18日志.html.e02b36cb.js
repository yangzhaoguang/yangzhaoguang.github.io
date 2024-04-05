"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[465],{6262:(s,n)=>{n.A=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}},8495:(s,n,a)=>{a.r(n),a.d(n,{comp:()=>u,data:()=>g});var e=a(641);const o=a.p+"assets/img/image-20240331222759467.db250bf0.png",p=a.p+"assets/img/image-20240331222834151.dfefbc9f.png",t=a.p+"assets/img/image-20240331223700913.6bf05563.png",l=a.p+"assets/img/image-20240331224057648.9233219a.png",i=a.p+"assets/img/image-20240331224233530.2300bb9c.png",r=a.p+"assets/img/image-20240331224337529.217a1fe1.png",c=[(0,e.Fv)('<h1 id="十八、日志" tabindex="-1"><a class="header-anchor" href="#十八、日志"><span>十八、日志</span></a></h1><h2 id="_18-1-日志类型" tabindex="-1"><a class="header-anchor" href="#_18-1-日志类型"><span>18.1 日志类型</span></a></h2><p>MySQL有不同类型的日志文件，用来存储不同类型的日志，分为<code> 二进制日志、 和慢查 错误日志、 通用查询日志 询日志</code>，这也是常用的4种。MySQL 8又新增两种支持的日志： <code>中继日志和 数据定义语句日志</code>。使 用这些日志文件，可以查看MySQL内部发生的事情。</p><ul><li>**慢查询日志：**记录所有执行时间超过long_query_time的所有查询，方便我们对查询进行优化。</li><li>**通用查询日志：**记录所有连接的起始时间和终止时间，以及连接发送给数据库服务器的所有指令，对我们复原操作的实际场景、发现问题，甚至是对数据库操作的审计都有很大的帮助。</li><li>**错误日志：**记录MySQL服务的启动、运行或停止MySQL服务时出现的问题，方便我们了解服务器的状态，从而对服务器进行维护。</li><li>**二进制日志：**记录所有更改数据的语句，可以用于主从服务器之间的数据同步，以及服务器遇到故障时数据的无损失恢复。</li><li>**中继日志：**用于主从服务器架构中，从服务器用来存放主服务器二进制日志内容的一个中间文件。从服务器通过读取中继日志的内容，来同步主服务器上的操作。</li><li>**数据定义语句日志：**记录数据定义语句执行的元数据操作。</li></ul><p><strong>日志弊端</strong></p><ul><li>日志功能会<code>降低MySQL数据库的性能</code>。</li><li>日志会 <code>占用大量的磁盘空间</code> 。</li></ul><h2 id="_18-2-通用查询日志" tabindex="-1"><a class="header-anchor" href="#_18-2-通用查询日志"><span>18.2 通用查询日志</span></a></h2><p>通用查询日志用来 记录用户的所有操作 ，包括启动和关闭MySQL服务、所有用户的连接开始时间和截止时间、发给 MySQL 数据库服务器的所有 SQL 指令等。当我们的数据发生异常时，<strong>查看通用查询日志，还原操作时的具体场景</strong>，可以帮助我们准确定位问题</p><p><strong>查看当前状态</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;%general%&#39;</span><span class="token punctuation">;</span>\n<span class="token operator">+</span><span class="token comment">------------------+------------------------------+</span>\n<span class="token operator">|</span> Variable_name <span class="token operator">|</span> <span class="token keyword">Value</span> <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">------------------+------------------------------+</span>\n<span class="token operator">|</span> general_log <span class="token operator">|</span> <span class="token keyword">OFF</span> <span class="token operator">|</span> <span class="token comment">#通用查询日志处于关闭状态</span>\n<span class="token operator">|</span> general_log_file <span class="token operator">|</span> <span class="token operator">/</span>var<span class="token operator">/</span>lib<span class="token operator">/</span>mysql<span class="token operator">/</span>atguigu01<span class="token punctuation">.</span>log <span class="token operator">|</span> <span class="token comment">#通用查询日志文件的名称是atguigu01.log</span>\n<span class="token operator">+</span><span class="token comment">------------------+------------------------------+</span>\n<span class="token number">2</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.03</span> sec<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>启动日志</strong></p><p><code>永久启动</code></p><p>修改my.cnf或者my.ini配置文件来设置。在[mysqld]组下加入log选项，并重启MySQL服务。格式如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>\ngeneral_log<span class="token operator">=</span><span class="token keyword">ON</span>\ngeneral_log_file<span class="token operator">=</span><span class="token punctuation">[</span>path<span class="token punctuation">[</span>filename<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token comment">#日志文件所在目录路径，filename为日志文件名</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>临时启动</code></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> general_log<span class="token operator">=</span><span class="token keyword">on</span><span class="token punctuation">;</span> <span class="token comment"># 开启通用查询日志</span>\n<span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span> general_log_file<span class="token operator">=</span>’path<span class="token operator">/</span>filename’<span class="token punctuation">;</span> <span class="token comment"># 设置日志文件保存位置</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关闭日志</strong></p><p>设置成 OFF 即可</p><h2 id="_18-3-错误日志" tabindex="-1"><a class="header-anchor" href="#_18-3-错误日志"><span>18.3 错误日志</span></a></h2><p>在MySQL数据库中，错误日志功能是 <code>默认开启 </code>的。而且，错误日志 <code>无法被禁止 </code>。</p><p>默认情况下，错误日志存储在MySQL数据库的数据文件夹下，名称默认为 <code>mysqld.log </code>（Linux系统）或 <code>hostname.err</code> （mac系统）。如果需要制定文件名，则需要在my.cnf或者my.ini中做如下配置：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>\nlog<span class="token operator">-</span>error<span class="token operator">=</span><span class="token punctuation">[</span>path<span class="token operator">/</span><span class="token punctuation">[</span>filename<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token comment">#path为日志文件所在的目录路径，filename为日志文件名</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看日志</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;log_err%&#39;</span><span class="token punctuation">;</span>\n<span class="token operator">+</span><span class="token comment">----------------------------+----------------------------------------+</span>\n<span class="token operator">|</span> Variable_name <span class="token operator">|</span> <span class="token keyword">Value</span> <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">----------------------------+----------------------------------------+</span>\n<span class="token operator">|</span> log_error <span class="token operator">|</span> <span class="token operator">/</span>var<span class="token operator">/</span>log<span class="token operator">/</span>mysqld<span class="token punctuation">.</span>log <span class="token operator">|</span>\n<span class="token operator">|</span> log_error_services <span class="token operator">|</span> log_filter_internal<span class="token punctuation">;</span> log_sink_internal <span class="token operator">|</span>\n<span class="token operator">|</span> log_error_suppression_list <span class="token operator">|</span> <span class="token operator">|</span>\n<span class="token operator">|</span> log_error_verbosity <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">----------------------------+----------------------------------------+</span>\n<span class="token number">4</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span> <span class="token punctuation">(</span><span class="token number">0.01</span> sec<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-4-二进制日志-bin-log" tabindex="-1"><a class="header-anchor" href="#_18-4-二进制日志-bin-log"><span>18.4 二进制日志(bin log)</span></a></h2><p>binlog 即 binary log，二进制日志文件，也叫作变更日志（update log）。它记录了数据库所有执行的DDL 和 DML 等数据库更新事件的语句，但是<code>不包含没有修改任何数据的语句</code>（如数据查询语句select、show等）</p><p><strong>binlog主要应用场景</strong>：</p><ul><li>一是用于 <code>数据恢复</code></li><li>二是用于<code> 数据复制</code></li></ul><h3 id="_18-4-1-使用命令" tabindex="-1"><a class="header-anchor" href="#_18-4-1-使用命令"><span>18.4.1 使用命令</span></a></h3><p><strong>查看当前状态</strong></p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;%log_bin%&#39;</span><span class="token punctuation">;</span>\n<span class="token operator">+</span><span class="token comment">---------------------------------+------------------------------------------------------------------+</span>\n<span class="token operator">|</span> Variable_name                   <span class="token operator">|</span> <span class="token keyword">Value</span>                                                            <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">---------------------------------+------------------------------------------------------------------+</span>\n<span class="token operator">|</span> log_bin                         <span class="token operator">|</span> <span class="token keyword">ON</span>                                                               <span class="token operator">|</span>\n<span class="token operator">|</span> log_bin_basename                <span class="token operator">|</span> C:\\ProgramData\\MySQL\\MySQL Server <span class="token number">8.0</span>\\<span class="token keyword">Data</span>\\LAPTOP<span class="token operator">-</span>OHIMTDP2       <span class="token operator">|</span>\n<span class="token operator">|</span> log_bin_index                   <span class="token operator">|</span> C:\\ProgramData\\MySQL\\MySQL Server <span class="token number">8.0</span>\\<span class="token keyword">Data</span>\\LAPTOP<span class="token operator">-</span>OHIMTDP2<span class="token punctuation">.</span><span class="token keyword">index</span> <span class="token operator">|</span>\n<span class="token operator">|</span> log_bin_trust_function_creators <span class="token operator">|</span> <span class="token keyword">OFF</span>                                                              <span class="token operator">|</span>\n<span class="token operator">|</span> log_bin_use_v1_row_events       <span class="token operator">|</span> <span class="token keyword">OFF</span>                                                              <span class="token operator">|</span>\n<span class="token operator">|</span> sql_log_bin                     <span class="token operator">|</span> <span class="token keyword">ON</span>                                                               <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">---------------------------------+------------------------------------------------------------------+</span>\n<span class="token number">6</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span><span class="token punctuation">,</span> <span class="token number">1</span> warning <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>日志参数设置</strong></p><p>修改MySQL的 <code>my.cnf</code> 或 <code>my.ini </code>文件可以设置二进制日志的相关参数：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token punctuation">[</span>mysqld<span class="token punctuation">]</span>\n<span class="token comment">#启用二进制日志</span>\nlog<span class="token operator">-</span>bin<span class="token operator">=</span>atguigu<span class="token operator">-</span>bin\nbinlog_expire_logs_seconds<span class="token operator">=</span><span class="token number">600</span>\nmax_binlog_size<span class="token operator">=</span><span class="token number">100</span>M\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>临时性方式</strong></p><p>如果不希望通过修改配置文件并重启的方式设置二进制日志的话，还可以使用如下指令，需要注意的是在mysql8中只有 <code>会话级别</code> 的设置，没有了global级别的设置。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment"># global 级别</span>\nmysql<span class="token operator">&gt;</span> <span class="token keyword">set</span> <span class="token keyword">global</span> sql_log_bin<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>\nERROR <span class="token number">1228</span> <span class="token punctuation">(</span>HY000<span class="token punctuation">)</span>: Variable <span class="token string">&#39;sql_log_bin&#39;</span> <span class="token operator">is</span> a <span class="token keyword">SESSION</span> variable <span class="token operator">and</span> can<span class="token punctuation">`</span>t be used <span class="token keyword">with</span> <span class="token keyword">SET</span> <span class="token keyword">GLOBAL</span>\n<span class="token comment"># session级别</span>\nmysql<span class="token operator">&gt;</span> <span class="token keyword">SET</span> sql_log_bin<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>\nQuery OK<span class="token punctuation">,</span> <span class="token number">0</span> <span class="token keyword">rows</span> affected <span class="token punctuation">(</span><span class="token number">0.01</span> 秒<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看日志</strong></p><p>当MySQL创建二进制日志文件时，先创建一个以“filename”为名称、以“.index”为后缀的文件，再创建一个以“filename”为名称、以“.000001”为后缀的文件。</p><p>MySQL服务 重新启动一次 ，以“.000001”为后缀的文件就会增加一个，并且后缀名按1递增。即日志文件的个数与MySQL服务启动的次数相同；如果日志长度超过了 <code>max_binlog_size </code>的上限（默认是1GB），就会创建一个新的日志文件。</p><p>查看当前的二进制日志文件列表及大小。指令如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> <span class="token keyword">BINARY</span> LOGS<span class="token punctuation">;</span>\n<span class="token operator">+</span><span class="token comment">--------------------+-----------+-----------+</span>\n<span class="token operator">|</span> Log_name <span class="token operator">|</span> File_size <span class="token operator">|</span> Encrypted <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">--------------------+-----------+-----------+</span>\n<span class="token operator">|</span> atguigu<span class="token operator">-</span>bin<span class="token punctuation">.</span><span class="token number">000001</span> <span class="token operator">|</span> <span class="token number">156</span> <span class="token operator">|</span> <span class="token keyword">No</span> <span class="token operator">|</span>\n<span class="token operator">+</span><span class="token comment">--------------------+-----------+-----------+</span>\n<span class="token number">1</span> 行于数据集 <span class="token punctuation">(</span><span class="token number">0.02</span> 秒<span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>查看日志文件内容</strong>：</p><p>下面命令将行事件以 伪SQL的形式 表现出来</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysqlbinlog <span class="token operator">-</span>v <span class="token string">&quot;文件位置&quot;</span>\n<span class="token comment"># 可查看参数帮助</span>\nmysqlbinlog <span class="token comment">--no-defaults --help</span>\n<span class="token comment"># 查看最后100行</span>\nmysqlbinlog <span class="token comment">--no-defaults --base64-output=decode-rows -vv atguigu-bin.000002 |tail -100</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这种办法读取出binlog日志的全文内容比较多，不容易分辨查看到pos点信息，下面介绍一种更为方便的查询命令：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> binlog events <span class="token punctuation">[</span><span class="token operator">IN</span> <span class="token string">&#39;log_name&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">FROM</span> pos<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">LIMIT</span> <span class="token punctuation">[</span><span class="token keyword">offset</span><span class="token punctuation">,</span><span class="token punctuation">]</span> row_count<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><p>IN &#39;log_name&#39; ：指定要查询的binlog文件名（不指定就是第一个binlog文件）</p></li><li><p>FROM pos ：指定从哪个pos起始点开始查起（不指定就是从整个文件首个pos点开始算）</p></li><li><p>LIMIT [offset] ：偏移量(不指定就是0)</p></li><li><p>row_count :查询总条数（不指定就是所有行）</p></li></ul><p><strong>使用日志恢复数据</strong></p><p>恢复命令：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysqlbinlog <span class="token punctuation">[</span><span class="token keyword">option</span><span class="token punctuation">]</span> filename<span class="token operator">|</span>mysql –uuser <span class="token operator">-</span>ppass<span class="token punctuation">;</span>\n\n举例：\n<span class="token comment"># mysqlbinlog命令路径</span>\n<span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>mysqlbinlog\n<span class="token comment">--start-position=起始点</span>\n<span class="token operator">-</span>stop<span class="token operator">-</span>position<span class="token operator">=</span>终止点\n<span class="token comment">--database= &#39;数据库&#39;</span>\n<span class="token string">&#39;log文件路径&#39;</span> \n<span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>mysql <span class="token operator">-</span>uroot <span class="token operator">-</span>proot <span class="token operator">-</span>v <span class="token string">&#39;数据库&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个命令可以这样理解：使用mysqlbinlog命令来读取filename中的内容，然后使用mysql命令将这些内容恢复到数据库中。</p><p>filename ：是日志文件名。</p><p>option ：可选项，比较重要的两对option参数是--start-date、--stop-date 和 --start-position、--</p><p>stop-position。</p><ul><li><p><code>--start-date</code> 和 <code>--stop-date </code>：可以指定恢复数据库的起始时间点和结束时间点。</p></li><li><p><code>--start-position</code> 和<code>--stop-position</code> ：可以指定恢复数据的开始位置和结束位置。</p></li></ul><blockquote><p>可以通过 <code> show binlog events in &#39;LAPTOP-OHIMTDP2.000137&#39;;</code> 命令查看事件的起始点和终止点，然后在执行上面的恢复命令！</p></blockquote><p><strong>删除日志文件</strong></p><p>MySQL的二进制文件可以配置自动删除，同时MySQL也提供了安全的手动删除二进制文件的方法。 <code>PURGE MASTER LOGS</code> 只删除指定部分的二进制日志文件， <code>RESET MASTER </code> 删除所有的二进制日志文件。具体如下：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">PURGE</span> {MASTER <span class="token operator">|</span> <span class="token keyword">BINARY</span>} LOGS <span class="token keyword">TO</span> ‘指定日志文件名’\n<span class="token keyword">PURGE</span> {MASTER <span class="token operator">|</span> <span class="token keyword">BINARY</span>} LOGS BEFORE ‘指定日期’\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-4-2-写入机制" tabindex="-1"><a class="header-anchor" href="#_18-4-2-写入机制"><span>18.4.2 写入机制</span></a></h3><p>binlog的写入时机也非常简单，事务执行过程中，先把日志写到 <code>binlog cache</code>，事务提交的时候，再把 binlog cache 写到 binlog 文件中。因为一个事务的 binlog 不能被拆开，无论这个事务多大，也要确保一次性写入，所以系统会给每个线程分配一个块内存作为binlog cache。</p><figure><img src="'+o+'" alt="image-20240331222759467" tabindex="0" loading="lazy"><figcaption>image-20240331222759467</figcaption></figure><p>write和fsync的时机，可以由参数 sync_binlog 控制，默认是 0 。为0的时候，表示每次提交事务都只write，由系统自行判断什么时候执行fsync。虽然性能得到提升，但是机器宕机，page cache里面的 binglog 会丢失。如下图：</p><figure><img src="'+p+'" alt="image-20240331222834151" tabindex="0" loading="lazy"><figcaption>image-20240331222834151</figcaption></figure><p>为了安全起见，可以设置为 1 ，表示每次提交事务都会执行fsync，就如同<strong>redo log</strong> <strong>刷盘流程</strong>一样。</p><p>最后还有一种折中方式，可以设置为N(N&gt;1)，表示每次提交事务都write，但累积N个事务后才fsync。</p><h3 id="_18-4-3-binlog-和-redolog对比" tabindex="-1"><a class="header-anchor" href="#_18-4-3-binlog-和-redolog对比"><span>18.4.3 binlog 和 redolog对比</span></a></h3><p><strong>Redo Log</strong>它是 <code>物理日志</code> ，用于保证事务的持久性，即在事务<code>提交之前</code>将事务的修改写入磁盘，以便在数据库发生崩溃时恢复未提交的事务</p><p><strong>binlog</strong> 是 <code> 逻辑日志</code> ，记录了所有对数据库进行修改的操作，包括对数据的增删改等，它用于复制、恢复、以及点播恢复等操作。</p><p><strong>Redo Log</strong> 是 InnoDB 存储引擎特有的，它记录了 InnoDB 存储引擎中数据页的物理修改操作。</p><p><strong>Binlog</strong> 是 MySQL 服务器的整体功能，它记录了数据库中执行的 SQL 语句的逻辑操作</p><h3 id="_18-4-4-俩阶段提交" tabindex="-1"><a class="header-anchor" href="#_18-4-4-俩阶段提交"><span>18.4.4 俩阶段提交</span></a></h3><p>在执行更新语句过程，会记录redo log与binlog两块日志，以基本的事务为单位，redo log在事务执行过程中可以不断写入，而binlog只有在提交事务时才写入，所以redo log与binlog的 <code>写入时机</code> 不一样。</p><figure><img src="'+t+'" alt="image-20240331223700913" tabindex="0" loading="lazy"><figcaption>image-20240331223700913</figcaption></figure><p><strong>redo log与binlog两份日志之间的逻辑不一致，会出现什么问题？</strong></p><p>如果事务执行完，写完了 redo log 但是由于binlog没写完就异常，这时候binlog里面没有对应的修改记录。</p><figure><img src="'+l+'" alt="image-20240331224057648" tabindex="0" loading="lazy"><figcaption>image-20240331224057648</figcaption></figure><p>为了解决两份日志之间的逻辑一致问题，InnoDB存储引擎使用<strong>两阶段提交</strong>方案</p><figure><img src="'+i+'" alt="image-20240331224233530" tabindex="0" loading="lazy"><figcaption>image-20240331224233530</figcaption></figure><p>使用两阶段提交后，写入binlog时发生异常也不会有影响，因为MySQL根据 redolog日志恢复数据时，发现redolog还处于prepare阶段，并且没有对应binlog日志，就会回滚该事务。</p><figure><img src="'+r+'" alt="image-20240331224337529" tabindex="0" loading="lazy"><figcaption>image-20240331224337529</figcaption></figure><h2 id="_18-5-中继日志-relay-log" tabindex="-1"><a class="header-anchor" href="#_18-5-中继日志-relay-log"><span>18.5 中继日志(relay log)</span></a></h2><p><strong>中继日志只在主从服务器架构的从服务器上存在</strong>。从服务器为了与主服务器保持一致，要从主服务器读取二进制日志的内容，并且把读取到的信息写入 <code>本地的日志文件 </code>中，这个从服务器本地的日志文件就叫 <code>中继日志 </code>。然后，从服务器读取中继日志，并根据中继日志的内容对从服务器的数据进行更新，完成主从服务器的 <code>数据同步</code> 。</p><p>文件名的格式是： <code>从服务器名 -relay-bin.序号</code> 。中继日志还有一个索引文件： <code>从服务器名 -relay-bin.index </code>，用来定位当前正在使用的中继日志。</p><p>中继日志与二进制日志的格式相同，可以用 <code>mysqlbinlog </code>工具进行查看。下面是中继日志的一个片段：</p>',86)],d={},u=(0,a(6262).A)(d,[["render",function(s,n){return(0,e.uX)(),(0,e.CE)("div",null,c)}]]),g=JSON.parse('{"path":"/MySQL/18%E6%97%A5%E5%BF%97.html","title":"十八、日志","lang":"zh-CN","frontmatter":{"date":"2024-03-28T00:00:00.000Z","category":["数据库"],"tag":["数据库","MySQL"],"editLink":false,"pageview":false,"sticky":true,"star":true,"order":18,"description":"十八、日志 18.1 日志类型 MySQL有不同类型的日志文件，用来存储不同类型的日志，分为 二进制日志、 和慢查 错误日志、 通用查询日志 询日志，这也是常用的4种。MySQL 8又新增两种支持的日志： 中继日志和 数据定义语句日志。使 用这些日志文件，可以查看MySQL内部发生的事情。 **慢查询日志：**记录所有执行时间超过long_query_...","head":[["meta",{"property":"og:url","content":"https://www.yzgc.top/MySQL/18%E6%97%A5%E5%BF%97.html"}],["meta",{"property":"og:site_name","content":"鲨瓜"}],["meta",{"property":"og:title","content":"十八、日志"}],["meta",{"property":"og:description","content":"十八、日志 18.1 日志类型 MySQL有不同类型的日志文件，用来存储不同类型的日志，分为 二进制日志、 和慢查 错误日志、 通用查询日志 询日志，这也是常用的4种。MySQL 8又新增两种支持的日志： 中继日志和 数据定义语句日志。使 用这些日志文件，可以查看MySQL内部发生的事情。 **慢查询日志：**记录所有执行时间超过long_query_..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-05T05:35:13.000Z"}],["meta",{"property":"article:author","content":"鲨瓜"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2024-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-05T05:35:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"十八、日志\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-05T05:35:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鲨瓜\\",\\"url\\":\\"https://www.yzgc.top\\"}]}"]]},"headers":[{"level":2,"title":"18.1 日志类型","slug":"_18-1-日志类型","link":"#_18-1-日志类型","children":[]},{"level":2,"title":"18.2 通用查询日志","slug":"_18-2-通用查询日志","link":"#_18-2-通用查询日志","children":[]},{"level":2,"title":"18.3 错误日志","slug":"_18-3-错误日志","link":"#_18-3-错误日志","children":[]},{"level":2,"title":"18.4 二进制日志(bin log)","slug":"_18-4-二进制日志-bin-log","link":"#_18-4-二进制日志-bin-log","children":[{"level":3,"title":"18.4.1 使用命令","slug":"_18-4-1-使用命令","link":"#_18-4-1-使用命令","children":[]},{"level":3,"title":"18.4.2 写入机制","slug":"_18-4-2-写入机制","link":"#_18-4-2-写入机制","children":[]},{"level":3,"title":"18.4.3 binlog 和 redolog对比","slug":"_18-4-3-binlog-和-redolog对比","link":"#_18-4-3-binlog-和-redolog对比","children":[]},{"level":3,"title":"18.4.4 俩阶段提交","slug":"_18-4-4-俩阶段提交","link":"#_18-4-4-俩阶段提交","children":[]}]},{"level":2,"title":"18.5 中继日志(relay log)","slug":"_18-5-中继日志-relay-log","link":"#_18-5-中继日志-relay-log","children":[]}],"git":{"createdTime":1712295313000,"updatedTime":1712295313000,"contributors":[{"name":"“杨照光”","email":"“yangzhaoguang@ciictec.com”","commits":1}]},"readingTime":{"minutes":9.31,"words":2792},"filePathRelative":"MySQL/18日志.md","localizedDate":"2024年3月28日","excerpt":"\\n<h2>18.1 日志类型</h2>\\n<p>MySQL有不同类型的日志文件，用来存储不同类型的日志，分为<code> 二进制日志、 和慢查 错误日志、 通用查询日志 询日志</code>，这也是常用的4种。MySQL 8又新增两种支持的日志： <code>中继日志和 数据定义语句日志</code>。使 用这些日志文件，可以查看MySQL内部发生的事情。</p>\\n<ul>\\n<li>**慢查询日志：**记录所有执行时间超过long_query_time的所有查询，方便我们对查询进行优化。</li>\\n<li>**通用查询日志：**记录所有连接的起始时间和终止时间，以及连接发送给数据库服务器的所有指令，对我们复原操作的实际场景、发现问题，甚至是对数据库操作的审计都有很大的帮助。</li>\\n<li>**错误日志：**记录MySQL服务的启动、运行或停止MySQL服务时出现的问题，方便我们了解服务器的状态，从而对服务器进行维护。</li>\\n<li>**二进制日志：**记录所有更改数据的语句，可以用于主从服务器之间的数据同步，以及服务器遇到故障时数据的无损失恢复。</li>\\n<li>**中继日志：**用于主从服务器架构中，从服务器用来存放主服务器二进制日志内容的一个中间文件。从服务器通过读取中继日志的内容，来同步主服务器上的操作。</li>\\n<li>**数据定义语句日志：**记录数据定义语句执行的元数据操作。</li>\\n</ul>","autoDesc":true}')}}]);