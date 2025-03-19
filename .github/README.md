<h1 align="center">Web-Check</h1>

<p align="center">
<img src="https://i.ibb.co/q1gZN2p/web-check-logo.png" width="96" /><br />
<b><i>为任何网站提供全面、按需的开源情报</i></b>
<br />
<b>🌐 <a href="https://web-check.xyz/">web-check.xyz</a></b><br />
</p>

---
<p align="center">
  <sup>感谢以下支持:</sup><br>
<a href="https://terminaltrove.com/?utm_campaign=github&utm_medium=referral&utm_content=web-check&utm_source=wcgh">
  <img src="https://i.ibb.co/8jrrcZ0/IMG-7210.jpg" width="300" alt="Terminal Trove">
  <br>
  <strong>终端所有事物的家园。</strong>
</a>
<br>
<a href="https://terminaltrove.com/newsletter?utm_campaign=github&utm_medium=referral&utm_content=web-check&utm_source=wcgh">
  <sub>在 Terminal Trove 找到您的下一个 CLI / TUI 工具及其他，</sub>
  <br>
  <sup>通过我们的newsletter获取新工具的更新。</sup>
</a>
</p>

---

#### 目录

- **[关于](#about)**
  - [截图](#screenshot)
  - [实时演示](#live-demo)
  - [镜像](#mirror)
  - [功能](#features)
- **[使用方法](#usage)**
  - [部署](#deployment)
    - [选项#1: Netlify](#deploying---option-1-netlify)
    - [选项#2: Vercel](#deploying---option-2-vercel)
    - [选项#3: Docker](#deploying---option-3-docker)
    - [选项#4: 从源代码](#deploying---option-4-from-source)
  - [配置选项](#configuring)
  - [开发者设置](#developing)
- **[社区](#community)**
  - [贡献](#contributing)
  - [报告错误](#reporting-bugs)
  - [支持](#supporting)
- **[许可证](#license)**

---

## 关于
深入了解给定网站的内部运作：发现潜在的攻击向量，分析服务器架构，查看安全配置，并了解网站使用的技术。

当前仪表板将显示：IP信息、SSL链、DNS记录、Cookies、头部信息、域名信息、搜索引擎爬行规则、页面地图、服务器位置、重定向记录、开放端口、路由跟踪、DNS安全扩展、网站性能、跟踪器、关联主机名、碳足迹。请持续关注，我将很快添加更多功能！

目标是帮助您轻松理解、优化和保护您的网站。

### Screenshot

<details>
      <summary>展开截图</summary>

[![Screenshot](https://raw.githubusercontent.com/Lissy93/web-check/master/.github/screenshots/web-check-screenshot1.png)](https://web-check.as93.net/)
      
</details>

[![Screenshot](https://i.ibb.co/r0jXN6s/web-check.png)](https://github.com/Lissy93/web-check/tree/master/.github/screenshots)

### Live Demo
托管版本可访问：**[web-check.as93.net](https://web-check.as93.net)**

### Mirror
此仓库的源代码已镜像到CodeBerg，可在以下地址访问：**[codeberg.org/alicia/web-check](https://codeberg.org/alicia/web-check)**

### Status

构建与部署: [![Netlify Status](https://api.netlify.com/api/v1/badges/c43453c1-5333-4df7-889b-c1d2b52183c0/deploy-status)](https://app.netlify.com/sites/web-check/deploys)
[![Vercel Status](https://therealsujitk-vercel-badge.vercel.app/?app=web-check-ten)](https://vercel.com/as93/web-check/)
[![🐳 Build + Publish Docker Image](https://github.com/Lissy93/web-check/actions/workflows/docker.yml/badge.svg)](https://github.com/Lissy93/web-check/actions/workflows/docker.yml)
[![🚀 Deploy to AWS](https://github.com/Lissy93/web-check/actions/workflows/deploy-aws.yml/badge.svg)](https://github.com/Lissy93/web-check/actions/workflows/deploy-aws.yml)
<br />
仓库管理与杂项: [![🪞 Mirror to Codeberg](https://github.com/Lissy93/web-check/actions/workflows/mirror.yml/badge.svg)](https://github.com/Lissy93/web-check/actions/workflows/mirror.yml)
[![💓 Inserts Contributors & Sponsors](https://github.com/Lissy93/web-check/actions/workflows/credits.yml/badge.svg)](https://github.com/Lissy93/web-check/actions/workflows/credits.yml)

### Features

<details open>
<summary><b>点击展开/收起部分</b></summary>

<sup>**注意** _此列表需要更新，自从上次更新以来已添加了许多新功能..._</sup>

以下部分概述了核心功能，并简要解释了这些数据为何对您有用，同时提供了进一步学习的资源链接。

<details>
<summary><b>IP Info</b></summary>

###### 描述
IP地址（互联网协议地址）是为连接到网络/互联网的每个设备分配的数字标签。通过查询域名的DNS（域名系统）A（地址）记录，可以找到与给定域名关联的IP。

###### 用例
查找给定服务器的IP是进行进一步调查的第一步，因为它允许我们探测服务器以获取更多信息。包括创建目标网络基础设施的详细地图，确定服务器的物理位置，识别托管服务，甚至发现托管在同一IP地址上的其他域名。

###### Useful Links
- [Understanding IP Addresses](https://www.digitalocean.com/community/tutorials/understanding-ip-addresses-subnets-and-cidr-notation-for-networking)
- [IP Addresses - Wiki](https://en.wikipedia.org/wiki/IP_address)
- [RFC-791 Internet Protocol](https://tools.ietf.org/html/rfc791)
- [whatismyipaddress.com](https://whatismyipaddress.com/)

</details>
<details>
<summary><b>SSL Chain</b></summary>

<img width="300" src="https://i.ibb.co/kB7LsV1/wc-ssl.png" align="right" />

###### 描述
SSL证书是用于验证网站或服务器身份的数字证书，启用安全的加密通信（HTTPS），并在客户端和服务器之间建立信任。要使网站能够使用HTTPS协议并加密用户和网站数据传输，必须拥有有效的SSL证书。SSL证书由证书颁发机构（CA）签发，这些机构是验证证书持有者身份和合法性的可信第三方。

###### 用例
SSL证书不仅保证了数据传输的安全性，还提供了有价值的OSINT数据。SSL证书中的信息可能包括颁发机构、域名、有效期，有时甚至包括组织详细信息。这对于验证网站的真实性、了解其安全设置或发现关联的子域名或其他服务非常有用。

###### Useful Links
- [TLS - Wiki](https://en.wikipedia.org/wiki/Transport_Layer_Security)
- [What is SSL (via Cloudflare learning)](https://www.cloudflare.com/learning/ssl/what-is-ssl/)
- [RFC-8446 - TLS](https://tools.ietf.org/html/rfc8446)
- [SSL Checker](https://www.sslshopper.com/ssl-checker.html)

</details>
<details>
<summary><b>DNS Records</b></summary>

<img width="300" src="https://i.ibb.co/7Q1kMwM/wc-dns.png" align="right" />

###### 描述
此任务涉及查找与特定域名关联的DNS记录。DNS是一个将人类可读的域名翻译成计算机用于通信的IP地址的系统。存在多种类型的DNS记录，包括A（地址）、MX（邮件交换）、NS（名称服务器）、CNAME（规范名称）和TXT（文本）等。

###### 用例
提取DNS记录可以在OSINT调查中提供大量信息。例如，A和AAAA记录可以披露与域名关联的IP地址，可能揭示服务器位置。MX记录可以提供关于域名电子邮件提供商的线索。TXT记录通常用于各种管理目的，有时可能会无意泄露内部信息。了解域名的DNS设置还有助于理解其在线基础设施的构建和管理方式。

###### Useful Links
- [What are DNS records? (via Cloudflare learning)](https://www.cloudflare.com/learning/dns/dns-records/)
- [DNS Record Types](https://en.wikipedia.org/wiki/List_of_DNS_record_types)
- [RFC-1035 - DNS](https://tools.ietf.org/html/rfc1035)
- [DNS Lookup (via MxToolbox)](https://mxtoolbox.com/DNSLookup.aspx)

</details>
<details>
<summary><b>Cookies</b></summary>

<img width="300" src="https://i.ibb.co/TTQ6DtP/wc-cookies.png" align="right" />

###### 描述
Cookies任务涉及检查目标网站设置的HTTP cookies。Cookies是用户浏览网站时由网页浏览器存储在用户计算机上的小块数据。它们保存特定客户端和网站的少量数据，例如网站偏好、用户会话状态或跟踪信息。

###### 用例
Cookies可以揭示网站如何跟踪和与用户交互的信息。例如，会话Cookies可以显示用户会话是如何管理的，跟踪Cookies可以暗示使用了何种跟踪或分析框架。此外，检查Cookies政策和实践可以提供关于网站安全设置和隐私法规遵从性的见解。

###### Useful Links
- [HTTP Cookie Docs (Mozilla)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [What are Cookies (via Cloudflare Learning)](https://www.cloudflare.com/learning/privacy/what-are-cookies/)
- [Testing for Cookie Attributes (OWASP)](https://owasp.org/www-project-web-security-testing-guide/v42/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes)
- [RFC-6265 - Coolies](https://tools.ietf.org/html/rfc6265)

</details>
<details>
<summary><b>Crawl Rules</b></summary>

<img width="300" src="https://i.ibb.co/KwQCjPf/wc-robots.png" align="right" />

###### 描述
Robots.txt是一个通常位于域名根目录下的文件，用于实现机器人排除协议（REP），指示哪些页面应被哪些爬虫和机器人忽略。避免搜索引擎爬虫过载网站是一种良好实践，但不应将其用于将页面排除在搜索结果之外（应使用noindex元标签或头部）。

###### 用例
在调查期间检查robots.txt文件通常很有用，因为它有时会披露网站所有者不希望被索引的目录和页面，可能是因为它们包含敏感信息，或者揭示了其他隐藏或未链接的目录的存在。此外，了解爬行规则可能提供关于网站SEO策略的见解。

###### Useful Links
- [Google Search Docs - Robots.txt](https://developers.google.com/search/docs/advanced/robots/intro)
- [Learn about robots.txt (via Moz.com)](https://moz.com/learn/seo/robotstxt)
- [RFC-9309 -  Robots Exclusion Protocol](https://datatracker.ietf.org/doc/rfc9309/)
- [Robots.txt - wiki](https://en.wikipedia.org/wiki/Robots_exclusion_standard)

</details>
<details>
<summary><b>Headers</b></summary>

<img width="300" src="https://i.ibb.co/t3xcwP1/wc-headers.png" align="right" />

###### 描述
Headers任务涉及提取和解释目标网站在请求-响应周期中发送的HTTP头部。HTTP头部是响应开始时或实际数据之前发送的键值对。头部包含处理数据传输的重要指令，包括缓存策略、内容类型、编码、服务器信息、安全策略等。

###### 用例
分析HTTP头部可以在OSINT调查中提供重要见解。头部可以揭示特定的服务器配置、所选技术、缓存指令和各种安全设置。这些信息有助于确定网站的基础技术堆栈、服务器端安全措施、潜在漏洞和一般操作实践。

###### Useful Links
- [HTTP Headers - Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [RFC-7231 Section 7 - Headers](https://datatracker.ietf.org/doc/html/rfc7231#section-7)
- [List of header response fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/)

</details>
<details>
<summary><b>Quality Metrics</b></summary>

<img width="300" src="https://i.ibb.co/Kqg8rx7/wc-quality.png" align="right" />

###### 描述
使用Lighthouse，质量指标任务测量目标网站的性能、可访问性、最佳实践和SEO。这将返回一个包含100个核心指标的简单清单，以及每个类别的分数，以评估给定网站的整体质量。

###### 用例
用于评估网站的技术健康状况、SEO问题，识别漏洞，并确保符合标准。

###### Useful Links
- [Lighthouse Docs](https://developer.chrome.com/docs/lighthouse/)
- [Google Page Speed Tools](https://developers.google.com/speed)
- [W3 Accessibility Tools](https://www.w3.org/WAI/test-evaluate/)
- [Google Search Console](https://search.google.com/search-console)
- [SEO Checker](https://www.seobility.net/en/seocheck/)
- [PWA Builder](https://www.pwabuilder.com/)

</details>
<details>
<summary><b>Server Location</b></summary>

<img width="300" src="https://i.ibb.co/cXH2hfR/wc-location.png" align="right" />

###### 描述
服务器位置任务根据其IP地址确定托管给定网站的服务器的物理位置。这是通过在位置数据库中查找IP来完成的，该数据库将IP映射到已知数据中心和ISP的经纬度。从经纬度中，还可以显示额外的上下文信息，如地图上的标记、地址、旗帜、时区、货币等。

###### 用例
了解服务器位置是更好地理解网站的第一步。对于网站所有者来说，这有助于优化内容分发，确保符合数据驻留要求，并识别可能影响特定地理区域用户体验的潜在延迟问题。对于安全研究人员来说，评估特定地区或司法管辖区在网络威胁和法规方面的风险。

###### Useful Links
- [IP Locator](https://geobytes.com/iplocator/)
- [Internet Geolocation - Wiki](https://en.wikipedia.org/wiki/Internet_geolocation)

</details>
<details>
<summary><b>Associated Hosts</b></summary>

<img width="300" src="https://i.ibb.co/25j1sT7/wc-hosts.png" align="right" />

###### 描述
此任务涉及识别和列出与网站主域名关联的所有域名和子域名（主机名）。此过程通常涉及DNS枚举以发现任何关联的域名和主机名，以及查看已知的DNS记录。

###### 用例
在调查期间，了解目标的完整网络存在范围至关重要。关联域名可能有助于发现相关项目、备份站点、开发/测试站点或与主站点相关的服务。这些有时可以提供额外的信息或潜在的安全漏洞。关联域名和主机名的全面列表还可以提供组织结构和在线足迹的概览。

###### Useful Links
- [DNS Enumeration - Wiki](https://en.wikipedia.org/wiki/DNS_enumeration)
- [OWASP - Enumerate Applications on Webserver](https://owasp.org/www-project-web-security-testing-guide/latest/4-Web_Application_Security_Testing/01-Information_Gathering/04-Enumerate_Applications_on_Webserver)
- [DNS Enumeration - DNS Dumpster](https://dnsdumpster.com/)
- [Subdomain Finder](https://subdomainfinder.c99.nl/)

</details>
<details>
<summary><b>Redirect Chain</b></summary>

<img width="300" src="https://i.ibb.co/hVVrmwh/wc-redirects.png" align="right" />

###### 描述
此任务跟踪从原始URL到最终目标URL的HTTP重定向序列。HTTP重定向是带有状态码的响应，建议客户端前往另一个URL。重定向可能因多种原因发生，例如URL规范化（定向到www版本的站点）、强制使用HTTPS、URL缩短器或将用户转发到新站点位置。

###### 用例
了解重定向链有几个原因。从安全角度来看，过长或复杂的重定向链可能是潜在安全风险的迹象，例如链中未加密的重定向。此外，重定向可能会影响网站性能和SEO，因为每次重定向都会引入额外的往返时间（RTT）。对于OSINT来说，了解重定向链有助于识别不同域名之间的关系或揭示某些技术或托管提供商的使用。

###### Useful Links
- [HTTP Redirects - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections)
- [URL Redirection - Wiki](https://en.wikipedia.org/wiki/URL_redirection)
- [301 Redirects explained](https://ahrefs.com/blog/301-redirects/)

</details>
<details>
<summary><b>TXT Records</b></summary>

<img width="300" src="https://i.ibb.co/wyt21QN/wc-txt-records.png" align="right" />

###### 描述
TXT记录是一种DNS记录类型，为域外来源提供文本信息。它们可用于多种目的，例如验证域名所有权、确保电子邮件安全，甚至防止对网站的未经授权更改。

###### 用例
TXT记录通常揭示了与给定域名一起使用的外部服务和技术。它们可能显示有关域名电子邮件配置的详细信息，使用特定服务（如Google Workspace或Microsoft 365）的证据，或安全措施（如SPF和DKIM）的存在。了解这些细节可以洞察组织使用的技术、其电子邮件安全实践和潜在漏洞。

###### Useful Links
- [TXT Records (via Cloudflare Learning)](https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/)
- [TXT Records - Wiki](https://en.wikipedia.org/wiki/TXT_record)
- [RFC-1464 - TXT Records](https://datatracker.ietf.org/doc/html/rfc1464)
- [TXT Record Lookup (via MxToolbox)](https://mxtoolbox.com/TXTLookup.aspx)

</details>
<details>
<summary><b>Server Status</b></summary>

<img width="300" src="https://i.ibb.co/V9CNLBK/wc-status.png" align="right" />

###### 描述
检查服务器是否在线并响应请求。

###### 用例


###### Useful Links

</details>
<details>
<summary><b>Open Ports</b></summary>

<img width="300" src="https://i.ibb.co/F8D1hmf/wc-ports.png" align="right" />

###### 描述
服务器上的开放端口是可用于与客户端建立连接的通信端点。每个端口对应于特定的服务或协议，例如HTTP（端口80）、HTTPS（端口443）、FTP（端口21）等。可以使用端口扫描等技术确定服务器上的开放端口。

###### 用例
了解服务器上哪些端口是开放的，可以提供有关运行在该服务器上的服务的信息，这对于了解系统的潜在漏洞或了解服务器提供的服务性质非常有用。

###### Useful Links
- [List of TCP & UDP Port Numbers](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers)
- [NMAP - Port Scanning Basics](https://nmap.org/book/man-port-scanning-basics.html)

</details>
<details>
<summary><b>Traceroute</b></summary>

<img width="300" src="https://i.ibb.co/M59qgxP/wc-trace-route.png" align="right" />

###### 描述
Traceroute是一种网络诊断工具，用于实时跟踪信息包从一个系统到另一个系统的路径。它记录沿途的每个跃点，提供有关路由器IP和每个点的延迟的详细信息。

###### 用例
在OSINT调查中，traceroute可以提供有关支持网站或服务的网络基础设施的路由路径和地理位置的见解。这有助于识别网络瓶颈、潜在的审查或网络流量操纵，并总体了解网络的结构和效率。此外，在traceroute期间收集的IP地址可能为进一步的OSINT调查提供额外的查询点。

###### Useful Links
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })

</details>
<details>
<summary><b>Carbon Footprint</b></summary>

<img width="300" src="https://i.ibb.co/5v6fSyw/Screenshot-from-2023-07-29-19-07-50.png" align="right" />

###### 描述
此任务计算网站的估计碳足迹。它基于传输和处理的数据量以及托管和交付网站的服务器的能源使用量。网站越大，功能越复杂，其碳足迹可能越高。

###### 用例
从OSINT的角度来看，了解网站的碳足迹并不能直接提供有关其内部运作或背后组织的见解。然而，在涉及环境影响的更广泛分析中，它仍然是宝贵的数据。例如，对于关注数字基础设施可持续性的活动家、研究人员或道德黑客来说，这可能有助于追究组织的环保责任。

###### Useful Links
- [WebsiteCarbon - Carbon Calculator](https://www.websitecarbon.com/)
- [The Green Web Foundation](https://www.thegreenwebfoundation.org/)
- [The Eco Friendly Web Alliance](https://ecofriendlyweb.org/)
- [Reset.org](https://en.reset.org/)
- [Your website is killing the planet - via Wired](https://www.wired.co.uk/article/internet-carbon-footprint)

</details>
<details>
<summary><b>Server Info</b></summary>

<img width="300" src="https://i.ibb.co/Mk1jx32/wc-server.png" align="right" />

###### 描述
此任务检索有关托管目标网站的服务器的各种信息。这可能包括服务器类型（例如Apache、Nginx）、托管提供商、自治系统编号（ASN）等。这些信息通常通过IP地址查找和HTTP响应头分析获得。

###### 用例
在OSINT背景下，服务器信息可以提供有关网站背后组织的重要线索。例如，托管提供商的选择可能暗示组织运营的地理区域，而服务器类型可能提示组织使用的技术。ASN还可以用于查找由同一组织托管的其他域名。

###### Useful Links
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })

</details>
<details>
<summary><b>Whois Lookup</b></summary>

<img width="300" src="https://i.ibb.co/89WLp14/wc-domain.png" align="right" />

###### 描述
此任务检索目标域名的Whois记录。Whois记录是信息的丰富来源，包括域名注册人的姓名和联系信息、域名的创建和到期日期、域名的名称服务器等。这些信息通常通过查询Whois数据库服务器获得。

###### 用例
在OSINT背景下，Whois记录可以提供有关网站背后实体的重要线索。它们可以显示域名首次注册的时间和到期时间，这可能提供有关实体运营时间线的见解。联系信息虽然通常被编辑或匿名化，但有时可以为进一步调查提供额外的途径。名称服务器还可以用于将同一实体拥有的多个域名联系起来。

###### Useful Links
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })

</details>
<details>
<summary><b>Domain Info</b></summary>

<img width="300" src="https://i.ibb.co/89WLp14/wc-domain.png" align="right" />

###### 描述
此任务检索目标域名的Whois记录。Whois记录是信息的丰富来源，包括域名注册人的姓名和联系信息、域名的创建和到期日期、域名的名称服务器等。这些信息通常通过查询Whois数据库服务器获得。

###### 用例
在OSINT背景下，Whois记录可以提供有关网站背后实体的重要线索。它们可以显示域名首次注册的时间和到期时间，这可能提供有关实体运营时间线的见解。联系信息虽然通常被编辑或匿名化，但有时可以为进一步调查提供额外的途径。名称服务器还可以用于将同一实体拥有的多个域名联系起来。

###### Useful Links
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })

</details>
<details>
<summary><b>DNS Security Extensions</b></summary>

<img width="300" src="https://i.ibb.co/J54zVmQ/wc-dnssec.png" align="right" />

###### 描述
如果没有DNSSEC，中间人攻击者可能伪造记录并将用户引导至钓鱼网站。这是因为DNS系统没有内置方法来验证请求的响应是否被伪造，或者过程中的任何其他部分是否被攻击者中断。DNS安全扩展（DNSSEC）通过使用公钥对DNS记录进行签名来保护DNS查询，因此浏览器可以检测响应是否被篡改。解决此问题的另一个方法是DoH（基于HTTPS的DNS）和DoT（基于TLD的DNS）。

###### 用例
DNSSEC信息提供了对组织网络安全成熟度和围绕DNS欺骗和缓存投毒的潜在漏洞的见解。如果没有实施DNS安全（DNSSEC、DoH、DoT等），这可能为攻击者提供入口点。

###### Useful Links
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })

</details>
<details>
<summary><b>Site Features</b></summary>

<img width="300" src="https://i.ibb.co/gP4P6kp/wc-features.png" align="right" />

###### 描述
检查网站上存在哪些核心功能。如果某功能被标记为“死”，则表示它在加载时未被积极使用。

###### 用例
这有助于了解网站的功能以及需要寻找哪些技术。

###### Useful Links

</details>
<details>
<summary><b>HTTP Strict Transport Security</b></summary>

<img width="300" src="https://i.ibb.co/k253fq4/Screenshot-from-2023-07-17-20-10-52.png" align="right" />

###### 描述
HTTP严格传输安全（HSTS）是一种网络安全策略机制，有助于保护网站免受协议降级攻击和Cookie劫持。网站可以通过符合一组要求并提交至列表来加入HSTS预加载列表。

###### 用例
网站启用HSTS有几个重要原因：
      1. 用户书签或手动输入http://example.com并受到中间人攻击者的攻击
        HSTS会自动将HTTP请求重定向到目标域名的HTTPS
      2. 旨在纯HTTPS的Web应用程序无意中包含HTTP链接或通过HTTP提供内容
        HSTS会自动将HTTP请求重定向到目标域名的HTTPS
      3. 中间人攻击者试图使用无效证书拦截受害者用户的流量，并希望用户接受不良证书
        HSTS不允许用户覆盖无效证书消息

###### Useful Links
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })
- [undefined](function link() { [native code] })

</details>
<details>
<summary><b>DNS Server</b></summary>

<img width="300" src="https://i.ibb.co/tKpL8F9/Screenshot-from-2023-08-12-15-43-12.png" align="right" />

###### 描述
此检查确定请求的URL/IP解析到的DNS服务器。还会进行初步检查，以查看DNS服务器是否支持DoH，以及是否容易受到DNS缓存投毒的影响。

###### 用例


###### Useful Links

</details>
<details>
<summary><b>Tech Stack</b></summary>

<img width="300" src="https://i.ibb.co/bBQSQNz/Screenshot-from-2023-08-12-15-43-46.png" align="right" />

###### 描述
检查网站使用哪些技术构建。这是通过获取并解析网站，然后将其与Wappalyzer维护的大量RegEx列表进行比较，以识别不同技术留下的独特指纹来完成的。

###### 用例
识别网站的技术堆栈有助于通过暴露潜在漏洞来评估其安全性，指导竞争分析和开发决策，并可以指导定制的营销策略。道德地应用这些知识至关重要，以避免数据盗窃或未经授权的入侵等有害活动。

###### Useful Links
- [Wappalyzer fingerprints](https://github.com/wappalyzer/wappalyzer/tree/master/src/technologies)
- [BuiltWith - Check what tech a site is using](https://builtwith.com/)

</details>
<details>
<summary><b>Listed Pages</b></summary>

<img width="300" src="https://i.ibb.co/GtrCQYq/Screenshot-from-2023-07-21-12-28-38.png" align="right" />

###### 描述
此任务查找并解析网站的列出站点地图。此文件列出了网站上的公共子页面，作者希望这些页面被搜索引擎抓取。站点地图有助于SEO，但也可以方便地查看网站的所有公共内容。

###### 用例
了解网站公共内容的结构，对于网站所有者来说，检查您的站点地图是否可访问、可解析并包含您希望的所有内容。

###### Useful Links
- [Learn about Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Sitemap XML spec](https://www.sitemaps.org/protocol.html)
- [Sitemap tutorial](https://www.conductor.com/academy/xml-sitemap/)

</details>
<details>
<summary><b>Security.txt</b></summary>

<img width="300" src="https://i.ibb.co/tq1FT5r/Screenshot-from-2023-07-24-20-31-21.png" align="right" />

###### 描述
security.txt文件告诉研究人员如何负责任地披露在您的网站上发现的任何安全问题。该标准在RFC 9116中提出，并规定该文件应包括联系点（电子邮件地址），以及可选的其他信息，如安全披露政策的链接、PGP密钥、首选语言、政策到期时间等。该文件应位于域名的根目录下，位于/security.txt或/.well-known/security.txt。

###### 用例
这很重要，因为如果没有定义的联系点，安全研究人员可能无法报告关键安全问题，或者可能使用不安全或公开的渠道这样做。从OSINT的角度来看，您还可以从中获取有关网站的信息，包括其安全态度、CSAF提供商以及PGP公钥中的元数据。

###### Useful Links
- [securitytxt.org](https://securitytxt.org/)
- [RFC-9116 Proposal](https://datatracker.ietf.org/doc/html/rfc9116)
- [RFC-9116 History](https://datatracker.ietf.org/doc/rfc9116/)
- [Security.txt (Wikipedia)](https://en.wikipedia.org/wiki/Security.txt)
- [Example security.txt (Cloudflare)](https://www.cloudflare.com/.well-known/security.txt)
- [Tutorial for creating security.txt (Pieter Bakker)](https://pieterbakker.com/implementing-security-txt/)

</details>
<details>
<summary><b>Linked Pages</b></summary>

<img width="300" src="https://i.ibb.co/LtK14XR/Screenshot-from-2023-07-29-11-16-44.png" align="right" />

###### 描述
显示网站上发现的所有内部和外部链接，由附加到锚元素的href属性标识。

###### 用例
对于网站所有者来说，这有助于诊断SEO问题，改进网站结构，了解内容如何相互连接。外部链接可以显示合作伙伴关系、依赖关系和潜在的声誉风险。从安全角度来看，出站链接可以帮助识别网站可能无意中链接到的任何恶意或受损站点。分析内部链接有助于了解网站结构，并可能发现不应公开的隐藏或易受攻击的页面。对于OSINT调查人员来说，它可以帮助全面了解目标，发现相关实体、资源，甚至网站隐藏的部分。

###### Useful Links
- [W3C Link Checker](https://validator.w3.org/checklink)

</details>
<details>
<summary><b>Social Tags</b></summary>

<img width="300" src="https://i.ibb.co/4srTT1w/Screenshot-from-2023-07-29-11-15-27.png" align="right" />

###### 描述
网站可以包含某些元标签，告诉搜索引擎和社交媒体平台显示哪些信息。这通常包括标题、描述、缩略图、关键字、作者、社交账户等。

###### 用例
将这些数据添加到您的网站将提升SEO，作为OSINT研究人员，了解给定Web应用程序如何描述自己很有用。

###### Useful Links
- [SocialSharePreview.com](https://socialsharepreview.com/)
- [The guide to social meta tags](https://css-tricks.com/essential-meta-tags-social-media/)
- [Web.dev metadata tags](https://web.dev/learn/html/metadata/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Facebook Open Graph](https://developers.facebook.com/docs/sharing/webmasters)

</details>
<details>
<summary><b>Email Configuration</b></summary>

<img width="300" src="https://i.ibb.co/yqhwx5G/Screenshot-from-2023-07-29-18-22-20.png" align="right" />

###### 描述
DMARC（基于域的消息认证、报告和一致性）：DMARC是一种电子邮件认证协议，与SPF和DKIM一起工作，以防止电子邮件欺骗和钓鱼。它允许域名所有者通过在DNS中发布的策略指定如何处理未经认证的邮件，并为接收邮件服务器提供一种向发件人发送有关邮件合规性反馈的方式。BIMI（消息识别品牌指示符）：BIMI是一种新兴的电子邮件标准，使组织能够自动在其客户的电子邮件客户端中显示标志。BIMI将标志与域的DMARC记录绑定，为收件人提供另一个视觉上的合法性保证。DKIM（域密钥识别邮件）：DKIM是一种电子邮件安全标准，旨在确保消息在发送和接收服务器之间的传输中未被更改。它使用与发件人域链接的数字签名来验证发件人并确保消息完整性。SPF（发件人策略框架）：SPF是一种电子邮件认证方法，旨在防止电子邮件欺骗。它通过创建DNS记录指定哪些邮件服务器有权代表域发送电子邮件，从而保护免受垃圾邮件的影响。这有助于接收邮件服务器检查来自域的传入邮件是否来自该域管理员授权的主机。

###### 用例
这些信息对研究人员很有帮助，因为它有助于评估域的电子邮件安全状况，发现潜在漏洞，并验证电子邮件的合法性以检测钓鱼。这些细节还可以洞察托管环境、潜在服务提供商以及目标组织的配置模式，协助调查工作。

###### Useful Links
- [Intro to DMARC, DKIM, and SPF (via Cloudflare)](https://www.cloudflare.com/learning/email-security/dmarc-dkim-spf/)
- [EasyDMARC Domain Scanner](https://easydmarc.com/tools/domain-scanner)
- [MX Toolbox](https://mxtoolbox.com/)
- [RFC-7208 - SPF](https://datatracker.ietf.org/doc/html/rfc7208)
- [RFC-6376 - DKIM](https://datatracker.ietf.org/doc/html/rfc6376)
- [RFC-7489 - DMARC](https://datatracker.ietf.org/doc/html/rfc7489)
- [BIMI Group](https://bimigroup.org/)

</details>
<details>
<summary><b>Firewall Detection</b></summary>

<img width="300" src="https://i.ibb.co/MfcxQt2/Screenshot-from-2023-08-12-15-40-52.png" align="right" />

###### 描述
WAF或Web应用防火墙通过过滤和监控Web应用程序与互联网之间的HTTP流量来帮助保护Web应用程序。它通常保护Web应用程序免受跨站伪造、跨站脚本（XSS）、文件包含和SQL注入等攻击。

###### 用例
了解网站是否使用WAF以及使用哪种防火墙软件/服务很有用，因为这提供了网站对几种攻击向量的保护见解，但也可能揭示防火墙本身的漏洞。

###### Useful Links
- [What is a WAF (via Cloudflare Learning)](https://www.cloudflare.com/learning/ddos/glossary/web-application-firewall-waf/)
- [OWASP - Web Application Firewalls](https://owasp.org/www-community/Web_Application_Firewall)
- [Web Application Firewall Best Practices](https://owasp.org/www-pdf-archive/Best_Practices_Guide_WAF_v104.en.pdf)
- [WAF - Wiki](https://en.wikipedia.org/wiki/Web_application_firewall)

</details>
<details>
<summary><b>HTTP Security Features</b></summary>

<img width="300" src="https://i.ibb.co/LP05HMV/Screenshot-from-2023-08-12-15-40-28.png" align="right" />

###### 描述
正确配置的安全HTTP头部为您的网站增加了一层针对常见攻击的保护。主要需要注意的头部包括：HTTP严格传输安全（HSTS）：强制使用HTTPS，减轻中间人攻击和协议降级尝试。内容安全策略（CSP）：约束网页资源以防止跨站脚本和数据注入攻击。X-Content-Type-Options：防止浏览器从声明的内容类型中嗅探MIME，遏制MIME类型混淆攻击。X-Frame-Options：通过控制浏览器是否应在`<frame>`、`<iframe>`、`<embed>`或`<object>`中渲染页面，保护用户免受点击劫持攻击。

###### 用例
审查安全头部很重要，因为它提供了有关网站防御态势和潜在漏洞的见解，能够主动缓解问题并确保符合安全最佳实践。

###### Useful Links
- [OWASP Secure Headers Project](https://owasp.org/www-project-secure-headers/)
- [HTTP Header Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html)
- [content-security-policy.com](https://content-security-policy.com/)
- [resourcepolicy.fyi](https://resourcepolicy.fyi/)
- [HTTP Security Headers](https://securityheaders.com/)
- [Mozilla Observatory](https://observatory.mozilla.org/)
- [CSP Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)
- [HSTS Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)
- [X-Content-Type-Options Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)
- [X-Frame-Options Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)
- [X-XSS-Protection Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)

</details>
<details>
<summary><b>Archive History</b></summary>

<img width="300" src="https://i.ibb.co/nB9szT1/Screenshot-from-2023-08-14-22-31-16.png" align="right" />

###### 描述
从Wayback Machine获取完整的档案历史。

###### 用例
这对于了解网站的历史以及随时间变化的情况很有用。它还可以用于查找旧版本的网站，或查找已删除的内容。

###### Useful Links
- [Wayback Machine](https://archive.org/web/)

</details>
<details>
<summary><b>Global Ranking</b></summary>

<img width="300" src="https://i.ibb.co/nkbczgb/Screenshot-from-2023-08-14-22-02-40.png" align="right" />

###### 描述
此检查显示请求网站的全球排名。这仅对排名前1亿的网站准确。我们使用的是Tranco项目的数据（见下文），该项目从Umbrella、Majestic、Quantcast、Chrome用户体验报告和Cloudflare Radar中整理了网络上的顶级网站。

###### 用例
了解网站的整体全球排名有助于了解网站的规模，并与其他网站进行比较。它还可以用于了解网站的相对受欢迎程度，并识别潜在趋势。

###### Useful Links
- [Tranco List](https://tranco-list.eu/)
- [Tranco Research Paper](https://tranco-list.eu/assets/tranco-ndss19.pdf)

</details>
<details>
<summary><b>Block Detection</b></summary>

<img width="300" src="https://i.ibb.co/M5JSXbW/Screenshot-from-2023-08-26-12-12-43.png" align="right" />

###### 描述
使用10多个最受欢迎的隐私、恶意软件和家长控制阻止DNS服务器检查对URL的访问。

###### 用例


###### Useful Links
- [ThreatJammer Lists](https://threatjammer.com/osint-lists)

</details>
<details>
<summary><b>Malware & Phishing Detection</b></summary>

<img width="300" src="https://i.ibb.co/hYgy621/Screenshot-from-2023-08-26-12-07-47.png" align="right" />

###### 描述
检查网站是否出现在几个常见的恶意软件和钓鱼列表中，以确定其威胁级别。

###### 用例
了解网站是否被任何这些服务列为威胁，有助于了解网站的声誉，并识别潜在趋势。

###### Useful Links
- [URLHaus](https://urlhaus-api.abuse.ch/)
- [PhishTank](https://www.phishtank.com/)

</details>
<details>
<summary><b>TLS Cipher Suites</b></summary>

<img width="300" src="https://i.ibb.co/6ydtH5R/Screenshot-from-2023-08-26-12-09-58.png" align="right" />

###### 描述
这些是服务器用于建立安全连接的加密算法组合。它包括密钥交换算法、批量加密算法、MAC算法和PRF（伪随机函数）。

###### 用例
从安全角度测试这些信息很重要。因为密码套件的安全性取决于其包含的算法。如果密码套件中的加密或认证算法版本存在已知漏洞，则密码套件和TLS连接可能容易受到降级或其他攻击。

###### Useful Links
- [sslscan2 CLI](https://github.com/rbsec/sslscan)
- [ssl-enum-ciphers (NPMAP script)](https://nmap.org/nsedoc/scripts/ssl-enum-ciphers.html)

</details>
<details>
<summary><b>TLS Security Config</b></summary>

<img width="300" src="https://i.ibb.co/FmksZJt/Screenshot-from-2023-08-26-12-12-09.png" align="right" />

###### 描述
这使用Mozilla的TLS Observatory指南检查TLS配置的安全性。它检查可能使网站容易受到攻击的不良配置，并提供修复建议。它还将提供有关过时和现代TLS配置的建议。

###### 用例
了解网站TLS配置的问题将帮助您解决潜在漏洞，并确保网站使用最新、最安全的TLS配置。

###### Useful Links

</details>
<details>
<summary><b>TLS Handshake Simulation</b></summary>

<img width="300" src="https://i.ibb.co/F7qRZkh/Screenshot-from-2023-08-26-12-11-28.png" align="right" />

###### 描述
这模拟了不同客户端（浏览器、操作系统）如何与服务器执行TLS握手。它有助于识别兼容性问题和不安全的配置。

###### 用例


###### Useful Links
- [TLS Handshakes (via Cloudflare Learning)](https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/)
- [SSL Test (via SSL Labs)](https://www.ssllabs.com/ssltest/)

</details>
<details>
<summary><b>Screenshot</b></summary>

<img width="300" src="https://i.ibb.co/2F0x8kP/Screenshot-from-2023-07-29-18-34-48.png" align="right" />

###### 描述
此检查截取请求的URL/IP解析到的网页的屏幕截图并显示。

###### 用例
这可能有助于查看给定网站的外观，不受您的浏览器、IP或位置的约束。

</details>

</details>

了解更多请访问：**[web-check.xyz/about](https://web-check.xyz/about)**

---

## 使用方法

### 部署

### Deploying - Option #1: Netlify

点击下方按钮部署到Netlify 👇

[![Deploy to Netlify](https://img.shields.io/badge/Deploy-Netlify-%2330c8c9?style=for-the-badge&logo=netlify&labelColor=1e0e41 'Deploy Web-Check to Netlify, via 1-Click Script')](https://app.netlify.com/start/deploy?repository=https://github.com/lissy93/web-check)

### Deploying - Option #2: Vercel

点击下方按钮部署到Vercel 👇

[![Deploy with Vercel](https://img.shields.io/badge/Deploy-Vercel-%23ffffff?style=for-the-badge&logo=vercel&labelColor=1e0e41)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flissy93%2Fweb-check&project-name=web-check&repository-name=web-check-fork&demo-title=Web-Check%20Demo&demo-description=Check%20out%20web-check.xyz%20to%20see%20a%20live%20demo%20of%20this%20application%20running.&demo-url=https%3A%2F%2Fweb-check.xyz&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2FLissy93%2Fweb-check%2Fmaster%2F.github%2Fscreenshots%2Fweb-check-screenshot10.png)

### Deploying - Option #3: Docker

运行 `docker run -p 3000:3000 lissy93/web-check`，然后打开 [`localhost:3000`](http://localhost:3000)

<details>
<summary>Docker选项</summary>

您可以从以下位置获取Docker镜像：
- DockerHub: [`lissy93/web-check`](https://hub.docker.com/r/lissy93/web-check)
- GHCR: [`ghcr.io/lissy93/web-check`](https://github.com/Lissy93/web-check/pkgs/container/web-check)
- 或通过克隆仓库并运行 `docker build -t web-check .` 自行构建镜像

</details>

### Deploying - Option #4: 从源代码

安装[开发](#developing)部分列出的前提条件，然后运行：

```bash
git clone https://github.com/Lissy93/web-check.git  # 从GitHub下载代码
cd web-check                                        # 进入项目目录
yarn install                                        # 安装NPM依赖
yarn build                                          # 为生产环境构建应用程序
yarn serve                                          # 启动应用程序（API和GUI）
