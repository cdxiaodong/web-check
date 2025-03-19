import { useState, useEffect, useCallback, type ReactNode } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { ToastContainer } from 'react-toastify';
import Masonry from 'react-masonry-css'

import colors from 'web-check-live/styles/colors';
import Heading from 'web-check-live/components/Form/Heading';
import Modal from 'web-check-live/components/Form/Modal';
import Footer from 'web-check-live/components/misc/Footer';
import Nav from 'web-check-live/components/Form/Nav';
import type { RowProps }  from 'web-check-live/components/Form/Row';

import Loader from 'web-check-live/components/misc/Loader';
import ErrorBoundary from 'web-check-live/components/misc/ErrorBoundary';
import SelfScanMsg from 'web-check-live/components/misc/SelfScanMsg';
import DocContent from 'web-check-live/components/misc/DocContent';
import ProgressBar, { type LoadingJob, type LoadingState, initialJobs } from 'web-check-live/components/misc/ProgressBar';
import ActionButtons from 'web-check-live/components/misc/ActionButtons';
import AdditionalResources from 'web-check-live/components/misc/AdditionalResources';
import ViewRaw from 'web-check-live/components/misc/ViewRaw';

import ServerLocationCard from 'web-check-live/components/Results/ServerLocation';
import ServerInfoCard from 'web-check-live/components/Results/ServerInfo';
import HostNamesCard from 'web-check-live/components/Results/HostNames';
import WhoIsCard from 'web-check-live/components/Results/WhoIs';
import LighthouseCard from 'web-check-live/components/Results/Lighthouse';
import ScreenshotCard from 'web-check-live/components/Results/Screenshot';
import SslCertCard from 'web-check-live/components/Results/SslCert';
import HeadersCard from 'web-check-live/components/Results/Headers';
import CookiesCard from 'web-check-live/components/Results/Cookies';
import RobotsTxtCard from 'web-check-live/components/Results/RobotsTxt';
import DnsRecordsCard from 'web-check-live/components/Results/DnsRecords';
import RedirectsCard from 'web-check-live/components/Results/Redirects';
import TxtRecordCard from 'web-check-live/components/Results/TxtRecords';
import ServerStatusCard from 'web-check-live/components/Results/ServerStatus';
import OpenPortsCard from 'web-check-live/components/Results/OpenPorts';
import TraceRouteCard from 'web-check-live/components/Results/TraceRoute';
import CarbonFootprintCard from 'web-check-live/components/Results/CarbonFootprint';
import SiteFeaturesCard from 'web-check-live/components/Results/SiteFeatures';
import DnsSecCard from 'web-check-live/components/Results/DnsSec';
import HstsCard from 'web-check-live/components/Results/Hsts';
import SitemapCard from 'web-check-live/components/Results/Sitemap';
import DomainLookup from 'web-check-live/components/Results/DomainLookup';
import DnsServerCard from 'web-check-live/components/Results/DnsServer';
import TechStackCard from 'web-check-live/components/Results/TechStack';
import SecurityTxtCard from 'web-check-live/components/Results/SecurityTxt';
import ContentLinksCard from 'web-check-live/components/Results/ContentLinks';
import SocialTagsCard from 'web-check-live/components/Results/SocialTags';
import MailConfigCard from 'web-check-live/components/Results/MailConfig';
import HttpSecurityCard from 'web-check-live/components/Results/HttpSecurity';
import FirewallCard from 'web-check-live/components/Results/Firewall';
import ArchivesCard from 'web-check-live/components/Results/Archives';
import RankCard from 'web-check-live/components/Results/Rank';
import BlockListsCard from 'web-check-live/components/Results/BlockLists';
import ThreatsCard from 'web-check-live/components/Results/Threats';
import TlsCipherSuitesCard from 'web-check-live/components/Results/TlsCipherSuites';
import TlsIssueAnalysisCard from 'web-check-live/components/Results/TlsIssueAnalysis';
import TlsClientSupportCard from 'web-check-live/components/Results/TlsClientSupport';

import keys from 'web-check-live/utils/get-keys';
import { determineAddressType, type AddressType } from 'web-check-live/utils/address-type-checker';
import useMotherHook from 'web-check-live/hooks/motherOfAllHooks';
import {
  getLocation, type ServerLocation,
  type Cookie,
  applyWhoIsResults, type Whois,
  parseShodanResults, type ShodanResults
} from 'web-check-live/utils/result-processor';

// 样式组件保持不变
const ResultsOuter = styled.div`
  display: flex;
  flex-direction: column;
  .masonry-grid {
    display: flex;
    width: auto;
  }
  .masonry-grid-col section { margin: 1rem 0.5rem; }
`;

const ResultsContent = styled.section`
  width: 95vw;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem;
  margin: auto;
  width: calc(100% - 2rem);
  padding-bottom: 1rem;
`;

const FilterButtons = styled.div`
  width: 95vw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  .one-half {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
  }
  button, input, .toggle-filters {
    background: ${colors.backgroundLighter};
    color: ${colors.textColor};
    border: none;
    border-radius: 4px;
    font-family: 'PTMono';
    padding: 0.25rem 0.5rem;
    border: 1px solid transparent;
    transition: all 0.2s ease-in-out;
  }
  button, .toggle-filters {
    cursor: pointer;
    text-transform: capitalize;
    box-shadow: 2px 2px 0px ${colors.bgShadowColor};
    transition: all 0.2s ease-in-out;
    &:hover {
      box-shadow: 4px 4px 0px ${colors.bgShadowColor};
      color: ${colors.primary};
    }
    &.selected {
      border: 1px solid ${colors.primary};
      color: ${colors.primary};
    }
  }
  input:focus {
    border: 1px solid ${colors.primary};
    outline: none;
  }
  .clear {
    color: ${colors.textColor};
    text-decoration: underline;
    cursor: pointer;
    font-size: 0.8rem;
    opacity: 0.8;
  }
  .toggle-filters  {
    font-size: 0.8rem;
  }
  .control-options {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    a {
      text-decoration: none;
    }
  }
`;

const Results = (props: { address?: string } ): JSX.Element => {
  const startTime = new Date().getTime();
  const address = props.address || useParams().urlToScan || '';
  const [ addressType, setAddressType ] = useState<AddressType>('empt');
  const [loadingJobs, setLoadingJobs] = useState<LoadingJob[]>(initialJobs);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(<></>);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  const clearFilters = () => {
    setTags([]);
    setSearchTerm('');
  };

  const updateTags = (tag: string) => {
    setTags(tags.includes(tag) ? tags.filter(t => t !== tag) : [tag]);
  };

  const updateLoadingJobs = useCallback((jobs: string | string[], newState: LoadingState, error?: string, retry?: () => void, data?: any) => {
    (typeof jobs === 'string' ? [jobs] : jobs).forEach((job: string) => {
      const now = new Date();
      const timeTaken = now.getTime() - startTime;
      setLoadingJobs((prevJobs) => {
        const newJobs = prevJobs.map((loadingJob: LoadingJob) => {
          if (job.includes(loadingJob.name)) {
            return { ...loadingJob, error, state: newState, timeTaken, retry };
          }
          return loadingJob;
        });

        const timeString = `[${now.getHours().toString().padStart(2, '0')}:`
          +`${now.getMinutes().toString().padStart(2, '0')}:`
          + `${now.getSeconds().toString().padStart(2, '0')}]`;

        if (newState === 'success') {
          console.log(
            `%c获取成功 - ${job}%c\n\n${timeString}%c ${job} 任务在 ${timeTaken}ms 内成功`
            + `\n%c运行 %cwindow.webCheck['${job}']%c 以检查原始结果`,
            `background:${colors.success};color:${colors.background};padding: 4px 8px;font-size:16px;`,
            `font-weight: bold; color: ${colors.success};`,
            `color: ${colors.success};`,
            `color: #1d8242;`,`color: #1d8242;text-decoration:underline;`,`color: #1d8242;`,
          );
          if (!(window as any).webCheck) (window as any).webCheck = {};
          if (data) (window as any).webCheck[job] = data;
        }

        if (newState === 'error') {
          console.log(
            `%c获取错误 - ${job}%c\n\n${timeString}%c ${job} 任务在 ${timeTaken}ms 后失败，错误如下:%c\n${error}`,
            `background: ${colors.danger}; color:${colors.background}; padding: 4px 8px; font-size: 16px;`,
            `font-weight: bold; color: ${colors.danger};`,
            `color: ${colors.danger};`,
            `color: ${colors.warning};`,
          );
        }

        if (newState === 'timed-out') {
          console.log(
            `%c获取超时 - ${job}%c\n\n${timeString}%c ${job} 任务在 ${timeTaken}ms 后超时，错误如下:%c\n${error}`,
            `background: ${colors.info}; color:${colors.background}; padding: 4px 8px; font-size: 16px;`,
            `font-weight: bold; color: ${colors.info};`,
            `color: ${colors.info};`,
            `color: ${colors.warning};`,
          );
        }

        return newJobs;
      });
    });
  }, [startTime]);

  const parseJson = (response: Response): Promise<any> => {
    return new Promise((resolve) => {
      response.json()
        .then(data => resolve(data))
        .catch(error => resolve(
          { error: `无法获取有效响应 😢\n`
          + '这可能是因为目标未暴露所需数据，'
          + '或 Web Check 当前运行的基础设施施加了限制。\n\n'
          + `错误信息:\n${error}`}
        ));
    });
  };

  const urlTypeOnly = ['url'] as AddressType[];
  const api = import.meta.env.PUBLIC_API_ENDPOINT || '/api';

  const [ipAddress, setIpAddress] = useMotherHook({
    jobId: 'get-ip',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/get-ip?url=${address}`)
      .then(res => parseJson(res))
      .then(res => res.ip),
  });

  useEffect(() => {
    if (!addressType || addressType === 'empt') {
      setAddressType(determineAddressType(address || ''));
    }
    if (addressType === 'ipV4' && address) {
      setIpAddress(address);
    }
  }, [address, addressType, setIpAddress]);

  const [locationResults, updateLocationResults] = useMotherHook<ServerLocation>({
    jobId: 'location',
    updateLoadingJobs,
    addressInfo: { address: ipAddress, addressType: 'ipV4', expectedAddressTypes: ['ipV4', 'ipV6'] },
    fetchRequest: () => fetch(`https://ipapi.co/${ipAddress}/json/`)
      .then(res => parseJson(res))
      .then(res => getLocation(res)),
  });

  const [sslResults, updateSslResults] = useMotherHook({
    jobId: 'ssl',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/ssl?url=${address}`).then((res) => parseJson(res)),
  });

  const [domainLookupResults, updateDomainLookupResults] = useMotherHook({
    jobId: 'domain',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/whois?url=${address}`).then(res => parseJson(res)),
  });

  const [lighthouseResults, updateLighthouseResults] = useMotherHook({
    jobId: 'quality',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/quality?url=${address}`)
      .then(res => parseJson(res))
      .then(res => res?.lighthouseResult || { error: res.error || '无数据' }),
  });

  const [techStackResults, updateTechStackResults] = useMotherHook({
    jobId: 'tech-stack',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/tech-stack?url=${address}`).then(res => parseJson(res)),
  });

  const [shoadnResults, updateShodanResults] = useMotherHook<ShodanResults>({
    jobId: ['hosts', 'server-info'],
    updateLoadingJobs,
    addressInfo: { address: ipAddress, addressType: 'ipV4', expectedAddressTypes: ['ipV4', 'ipV6'] },
    fetchRequest: () => fetch(`https://api.shodan.io/shodan/host/${ipAddress}?key=${keys.shodan}`)
      .then(res => parseJson(res))
      .then(res => parseShodanResults(res)),
  });

  const [cookieResults, updateCookieResults] = useMotherHook<{cookies: Cookie[]}>({
    jobId: 'cookies',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/cookies?url=${address}`)
      .then(res => parseJson(res)),
  });

  const [headersResults, updateHeadersResults] = useMotherHook({
    jobId: 'headers',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/headers?url=${address}`).then(res => parseJson(res)),
  });

  const [dnsResults, updateDnsResults] = useMotherHook({
    jobId: 'dns',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/dns?url=${address}`).then(res => parseJson(res)),
  });

  const [httpSecurityResults, updateHttpSecurityResults] = useMotherHook({
    jobId: 'http-security',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/http-security?url=${address}`).then(res => parseJson(res)),
  });

  const [socialTagResults, updateSocialTagResults] = useMotherHook({
    jobId: 'social-tags',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/social-tags?url=${address}`).then(res => parseJson(res)),
  });

  const [traceRouteResults, updateTraceRouteResults] = useMotherHook({
    jobId: 'trace-route',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/trace-route?url=${address}`).then(res => parseJson(res)),
  });

  const [securityTxtResults, updateSecurityTxtResults] = useMotherHook({
    jobId: 'security-txt',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/security-txt?url=${address}`).then(res => parseJson(res)),
  });

  const [dnsServerResults, updateDnsServerResults] = useMotherHook({
    jobId: 'dns-server',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/dns-server?url=${address}`).then(res => parseJson(res)),
  });

  const [firewallResults, updateFirewallResults] = useMotherHook({
    jobId: 'firewall',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/firewall?url=${address}`).then(res => parseJson(res)),
  });

  const [dnsSecResults, updateDnsSecResults] = useMotherHook({
    jobId: 'dnssec',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/dnssec?url=${address}`).then(res => parseJson(res)),
  });

  const [hstsResults, updateHstsResults] = useMotherHook({
    jobId: 'hsts',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/hsts?url=${address}`).then(res => parseJson(res)),
  });

  const [threatResults, updateThreatResults] = useMotherHook({
    jobId: 'threats',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/threats?url=${address}`).then(res => parseJson(res)),
  });

  const [mailConfigResults, updateMailConfigResults] = useMotherHook({
    jobId: 'mail-config',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/mail-config?url=${address}`).then(res => parseJson(res)),
  });

  const [archivesResults, updateArchivesResults] = useMotherHook({
    jobId: 'archives',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/archives?url=${address}`).then(res => parseJson(res)),
  });

  const [rankResults, updateRankResults] = useMotherHook({
    jobId: 'rank',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/rank?url=${address}`).then(res => parseJson(res)),
  });

  const [screenshotResult, updateScreenshotResult] = useMotherHook({
    jobId: 'screenshot',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/screenshot?url=${address}`).then(res => parseJson(res)),
  });

  const [tlsResults, updateTlsResults] = useMotherHook({
    jobId: ['tls-cipher-suites', 'tls-security-config', 'tls-client-support'],
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/tls?url=${address}`).then(res => parseJson(res)),
  });

  const [redirectResults, updateRedirectResults] = useMotherHook({
    jobId: 'redirects',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/redirects?url=${address}`).then(res => parseJson(res)),
  });

  const [linkedPagesResults, updateLinkedPagesResults] = useMotherHook({
    jobId: 'linked-pages',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/linked-pages?url=${address}`).then(res => parseJson(res)),
  });

  const [robotsTxtResults, updateRobotsTxtResults] = useMotherHook<{robots: RowProps[]}>({
    jobId: 'robots-txt',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/robots-txt?url=${address}`)
      .then(res => parseJson(res)),
  });

  const [serverStatusResults, updateServerStatusResults] = useMotherHook({
    jobId: 'status',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/status?url=${address}`).then(res => parseJson(res)),
  });

  const [portsResults, updatePortsResults] = useMotherHook({
    jobId: 'ports',
    updateLoadingJobs,
    addressInfo: { address: ipAddress, addressType: 'ipV4', expectedAddressTypes: ['ipV4', 'ipV6'] },
    fetchRequest: () => fetch(`${api}/ports?url=${ipAddress}`)
      .then(res => parseJson(res)),
  });

  const [whoIsResults, updateWhoIsResults] = useMotherHook<Whois | { error: string }>({
    jobId: 'whois',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`https://api.whoapi.com/?domain=${address}&r=whois&apikey=${keys.whoApi}`)
      .then(res => parseJson(res))
      .then(res => applyWhoIsResults(res)),
  });

  const [txtRecordResults, updateTxtRecordResults] = useMotherHook({
    jobId: 'txt-records',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/txt-records?url=${address}`).then(res => parseJson(res)),
  });

  const [blockListsResults, updateBlockListsResults] = useMotherHook({
    jobId: 'block-lists',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/block-lists?url=${address}`).then(res => parseJson(res)),
  });

  const [sitemapResults, updateSitemapResults] = useMotherHook({
    jobId: 'sitemap',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/sitemap?url=${address}`).then(res => parseJson(res)),
  });

  const [carbonResults, updateCarbonResults] = useMotherHook({
    jobId: 'carbon',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/carbon?url=${address}`).then(res => parseJson(res)),
  });

  const [siteFeaturesResults, updateSiteFeaturesResults] = useMotherHook({
    jobId: 'features',
    updateLoadingJobs,
    addressInfo: { address, addressType, expectedAddressTypes: urlTypeOnly },
    fetchRequest: () => fetch(`${api}/features?url=${address}`)
      .then(res => parseJson(res))
      .then(res => {
        if (res.Errors && res.Errors.length > 0) {
          return { error: `没有返回数据，因为 ${res.Errors[0].Message || 'API 查询失败'}` };
        }
        return res;
      }),
  });

  useEffect(() => {
    const checkJobs = () => {
      loadingJobs.forEach(job => {
        if (job.state === 'loading') {
          updateLoadingJobs(job.name, 'timed-out');
        }
      });
    };
    const timeoutId = setTimeout(checkJobs, 10000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [loadingJobs, updateLoadingJobs]);

  const makeSiteName = (address: string): string => {
    try {
      return new URL(address).hostname.replace('www.', '');
    } catch (error) {
      return address;
    }
  }

  const resultCardData = [
    { id: 'location', title: '服务器位置', result: locationResults, Component: ServerLocationCard, refresh: updateLocationResults, tags: ['服务器'] },
    { id: 'ssl', title: 'SSL 证书', result: sslResults, Component: SslCertCard, refresh: updateSslResults, tags: ['服务器', '安全'] },
    { id: 'domain', title: '域名 Whois', result: domainLookupResults, Component: DomainLookup, refresh: updateDomainLookupResults, tags: ['服务器'] },
    { id: 'quality', title: '质量摘要', result: lighthouseResults, Component: LighthouseCard, refresh: updateLighthouseResults, tags: ['客户端'] },
    { id: 'tech-stack', title: '技术栈', result: techStackResults, Component: TechStackCard, refresh: updateTechStackResults, tags: ['客户端', '元数据'] },
    { id: 'server-info', title: '服务器信息', result: shoadnResults?.serverInfo, Component: ServerInfoCard, refresh: updateShodanResults, tags: ['服务器'] },
    { id: 'cookies', title: 'Cookie', result: cookieResults, Component: CookiesCard, refresh: updateCookieResults, tags: ['客户端', '安全'] },
    { id: 'headers', title: 'headers', result: headersResults, Component: HeadersCard, refresh: updateHeadersResults, tags: ['客户端', '安全'] },
    { id: 'dns', title: 'DNS 记录', result: dnsResults, Component: DnsRecordsCard, refresh: updateDnsResults, tags: ['服务器'] },
    { id: 'hosts', title: '主机名', result: shoadnResults?.hostnames, Component: HostNamesCard, refresh: updateShodanResults, tags: ['服务器'] },
    { id: 'http-security', title: 'HTTP 安全', result: httpSecurityResults, Component: HttpSecurityCard, refresh: updateHttpSecurityResults, tags: ['安全'] },
    { id: 'social-tags', title: '社交标签', result: socialTagResults, Component: SocialTagsCard, refresh: updateSocialTagResults, tags: ['客户端', '元数据'] },
    { id: 'trace-route', title: '跟踪路由', result: traceRouteResults, Component: TraceRouteCard, refresh: updateTraceRouteResults, tags: ['服务器'] },
    { id: 'security-txt', title: 'Security-Txt', result: securityTxtResults, Component: SecurityTxtCard, refresh: updateSecurityTxtResults, tags: ['安全'] },
    { id: 'dns-server', title: 'DNS 服务器', result: dnsServerResults, Component: DnsServerCard, refresh: updateDnsServerResults, tags: ['服务器'] },
    { id: 'firewall', title: '防火墙', result: firewallResults, Component: FirewallCard, refresh: updateFirewallResults, tags: ['服务器', '安全'] },
    { id: 'dnssec', title: 'DNSSEC', result: dnsSecResults, Component: DnsSecCard, refresh: updateDnsSecResults, tags: ['安全'] },
    { id: 'hsts', title: 'HSTS 检查', result: hstsResults, Component: HstsCard, refresh: updateHstsResults, tags: ['安全'] },
    { id: 'threats', title: '威胁', result: threatResults, Component: ThreatsCard, refresh: updateThreatResults, tags: ['安全'] },
    { id: 'mail-config', title: '电子邮件配置', result: mailConfigResults, Component: MailConfigCard, refresh: updateMailConfigResults, tags: ['服务器'] },
    { id: 'archives', title: '归档历史', result: archivesResults, Component: ArchivesCard, refresh: updateArchivesResults, tags: ['元数据'] },
    { id: 'rank', title: '全球排名', result: rankResults, Component: RankCard, refresh: updateRankResults, tags: ['元数据'] },
    { id: 'screenshot', title: '屏幕截图', result: screenshotResult || lighthouseResults?.fullPageScreenshot?.screenshot, Component: ScreenshotCard, refresh: updateScreenshotResult, tags: ['客户端', '元数据'] },
    { id: 'tls-cipher-suites', title: 'TLS 密码套件', result: tlsResults, Component: TlsCipherSuitesCard, refresh: updateTlsResults, tags: ['服务器', '安全'] },
    { id: 'tls-security-config', title: 'TLS 安全问题', result: tlsResults, Component: TlsIssueAnalysisCard, refresh: updateTlsResults, tags: ['安全'] },
    { id: 'tls-client-support', title: 'TLS 握手模拟', result: tlsResults, Component: TlsClientSupportCard, refresh: updateTlsResults, tags: ['安全'] },
    { id: 'redirects', title: '重定向', result: redirectResults, Component: RedirectsCard, refresh: updateRedirectResults, tags: ['元数据'] },
    { id: 'linked-pages', title: '链接页面', result: linkedPagesResults, Component: ContentLinksCard, refresh: updateLinkedPagesResults, tags: ['客户端', '元数据'] },
    { id: 'robots-txt', title: '爬行规则', result: robotsTxtResults, Component: RobotsTxtCard, refresh: updateRobotsTxtResults, tags: ['元数据'] },
    { id: 'status', title: '服务器状态', result: serverStatusResults, Component: ServerStatusCard, refresh: updateServerStatusResults, tags: ['服务器'] },
    { id: 'ports', title: '开放端口', result: portsResults, Component: OpenPortsCard, refresh: updatePortsResults, tags: ['服务器'] },
    { id: 'whois', title: '域名信息', result: whoIsResults, Component: WhoIsCard, refresh: updateWhoIsResults, tags: ['服务器'] },
    { id: 'txt-records', title: 'TXT 记录', result: txtRecordResults, Component: TxtRecordCard, refresh: updateTxtRecordResults, tags: ['服务器'] },
    { id: 'block-lists', title: 'block阻止列表', result: blockListsResults, Component: BlockListsCard, refresh: updateBlockListsResults, tags: ['安全', '元数据'] },
    { id: 'features', title: '功能', result: siteFeaturesResults, Component: SiteFeaturesCard, refresh: updateSiteFeaturesResults, tags: ['元数据'] },
    { id: 'sitemap', title: 'sitemap', result: sitemapResults, Component: SitemapCard, refresh: updateSitemapResults, tags: ['元数据'] },
    { id: 'carbon', title: 'Carbon Footprint', result: carbonResults, Component: CarbonFootprintCard, refresh: updateCarbonResults, tags: ['元数据'] },
  ];

  const makeActionButtons = (title: string, refresh: () => void, showInfo: (id: string) => void): ReactNode => {
    const actions = [
      { label: `关于 ${title} 的信息`, onClick: showInfo, icon: 'ⓘ' },
      { label: `重新获取 ${title} 数据`, onClick: refresh, icon: '↻' },
    ];
    return <ActionButtons actions={actions} />;
  };

  const showInfo = (id: string) => {
    setModalContent(DocContent(id));
    setModalOpen(true);
  };

  const showErrorModal = (content: ReactNode) => {
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <ResultsOuter>
      <Nav>
        {address && (
          <Heading color={colors.textColor} size="medium">
            {addressType === 'url' && (
              <a target="_blank" rel="noreferrer" href={address}>
                <img width="32px" src={`https://icon.horse/icon/${makeSiteName(address)}`} alt="" />
              </a>
            )}
            {makeSiteName(address)}
          </Heading>
        )}
      </Nav>
      <ProgressBar loadStatus={loadingJobs} showModal={showErrorModal} showJobDocs={showInfo} />
      <Loader show={loadingJobs.filter((job: LoadingJob) => job.state !== 'loading').length < 5} />
      <FilterButtons>
        {showFilters ? (
          <>
            <div className="one-half">
              <span className="group-label">过滤</span>
              {['服务器', '客户端', '元数据'].map((tag: string) => (
                <button
                  key={tag}
                  className={tags.includes(tag) ? 'selected' : ''}
                  onClick={() => updateTags(tag)}
                >
                  {tag}
                </button>
              ))}
              {(tags.length > 0 || searchTerm.length > 0) && (
                <span onClick={clearFilters} className="clear">清除过滤</span>
              )}
            </div>
            <div className="one-half">
              <span className="group-label">搜索</span>
              <input
                type="text"
                placeholder="过滤结果"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span className="toggle-filters" onClick={() => setShowFilters(false)}>隐藏</span>
            </div>
          </>
        ) : (
          <div className="control-options">
            <span className="toggle-filters" onClick={() => setShowFilters(true)}>显示过滤</span>
            <a href="#view-download-raw-data"><span className="toggle-filters">导出数据</span></a>
            <a href="/about"><span className="toggle-filters">了解结果</span></a>
            <a href="/about#additional-resources"><span className="toggle-filters">更多工具</span></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/lissy93/web-check">
              <span className="toggle-filters">查看 GitHub</span>
            </a>
          </div>
        )}
      </FilterButtons>
      <ResultsContent>
        <Masonry
          breakpointCols={{ 10000: 12, 4000: 9, 3600: 8, 3200: 7, 2800: 6, 2400: 5, 2000: 4, 1600: 3, 1200: 2, 800: 1 }}
          className="masonry-grid"
          columnClassName="masonry-grid-col"
        >
          {resultCardData.map(({ id, title, result, tags, refresh, Component }, index: number) => {
            const show = (tags.length === 0 || tags.some(tag => tags.includes(tag)))
              && title.toLowerCase().includes(searchTerm.toLowerCase())
              && (result && !result.error);
            return show ? (
              <ErrorBoundary title={title} key={`eb-${index}`}>
                <Component
                  key={`${title}-${index}`}
                  data={{ ...result }}
                  title={title}
                  actionButtons={refresh ? makeActionButtons(title, refresh, () => showInfo(id)) : undefined}
                />
              </ErrorBoundary>
            ) : null;
          })}
        </Masonry>
      </ResultsContent>
      <ViewRaw everything={resultCardData} />
      <AdditionalResources url={address} />
      <Footer />
      <Modal isOpen={modalOpen} closeModal={() => setModalOpen(false)}>{modalContent}</Modal>
      <ToastContainer limit={3} draggablePercent={60} autoClose={2500} theme="dark" position="bottom-right" />
    </ResultsOuter>
  );
}

export default Results;