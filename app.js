const market={sale:{label:'매매',current:'108.4',month:'+0.62%',year:'+4.18%',values:[99.3,99.7,100.1,100.8,101.6,102.4,103.7,104.6,105.8,106.4,107.5,108.4],changes:[-.12,.18,.24,.37,.31,.42,.55,.28,.47,.35,.51,.62]},jeonse:{label:'전세',current:'105.7',month:'+0.38%',year:'+2.65%',values:[100.4,100.7,101.1,101.5,102.3,102.8,103.5,103.9,104.2,104.8,105.3,105.7],changes:[.05,.12,.19,.21,.38,.24,.31,.16,.22,.29,.41,.38]},monthly:{label:'월세',current:'111.2',month:'+0.74%',year:'+6.93%',values:[98.8,99.5,100.2,101.8,102.9,104.6,105.5,106.7,107.8,109.1,110.4,111.2],changes:[.15,.21,.3,.62,.45,.7,.39,.52,.61,.68,.81,.74]}};
const saleNames=['엘시티 더샵','마린시티자이','해운대아이파크','트럼프월드센텀Ⅰ','두산위브더제니스','경동제이드','대우월드마크센텀','롯데캐슬스타','해운대경동리인뷰','센텀파크1차'];
const jeonseNames=['엘시티 더샵','해운대아이파크','마린시티자이','두산위브더제니스','트럼프월드센텀Ⅰ','경동제이드','센텀파크1차','해운대경동리인뷰','대우월드마크센텀','해운대힐스테이트위브'];
function rows(names,areas,prices){return names.map((n,i)=>[n,(i===0?'중동':'우동')+' · '+areas[i],prices[i]])}
const rankData={trade:{sale:rows(saleNames,['244㎡','180㎡','219㎡','232㎡','210㎡','221㎡','181㎡','186㎡','139㎡','151㎡'],['85.2억','32.8억','31.5억','28.0억','26.8억','25.4억','24.9억','23.8억','22.5억','21.9억']),jeonse:rows(jeonseNames,['186㎡','165㎡','180㎡','170㎡','182㎡','166㎡','151㎡','109㎡','125㎡','134㎡'],['19.0억','13.5억','12.8억','11.5억','10.8억','10.0억','9.5억','8.8억','8.5억','8.2억']),monthly:rows(jeonseNames,['186㎡','165㎡','170㎡','134㎡','182㎡','166㎡','151㎡','125㎡','109㎡','134㎡'],['1억 / 920만','1억 / 650만','8천 / 610만','1억 / 550만','5천 / 520만','1억 / 500만','5천 / 420만','5천 / 390만','5천 / 360만','3천 / 350만'])},pyeong:{sale:rows(saleNames,['244㎡','84㎡','110㎡','116㎡','127㎡','132㎡','84㎡','125㎡','101㎡','109㎡'],['1억 1,540만','7,890만','7,420만','7,180만','6,950만','6,640만','6,410만','6,120만','5,970만','5,830만']),jeonse:rows(jeonseNames,['186㎡','84㎡','110㎡','127㎡','116㎡','132㎡','101㎡','84㎡','125㎡','109㎡'],['3,380만','3,170만','3,040만','2,960만','2,850만','2,730만','2,650만','2,570만','2,460만','2,380만']),monthly:rows(jeonseNames,['186㎡','84㎡','110㎡','127㎡','116㎡','132㎡','101㎡','84㎡','125㎡','109㎡'],['월 163만','월 151만','월 145만','월 139만','월 132만','월 127만','월 118만','월 112만','월 108만','월 104만'])}};
const locationData={
school:{kicker:'EDUCATION',score:92,title:'우수한 학군, 흔들리지 않는 주거 가치',description:'해운대구는 센텀·좌동을 중심으로 명문 학군과 대형 학원가가 밀집해 있습니다. 초·중·고 도보 통학권과 교육 인프라가 주거 선호도를 안정적으로 뒷받침합니다.',metrics:[['특목·자사고 진학률','부산 상위 12%','권역 평균'],['반경 1km 학교','평균 8.4개','주요 단지'],['대형 학원 수','213개','좌동 중심']],note:'좌동 신시가지와 센텀권은 학교·학원가 접근성이 함께 높아 자녀 교육 목적의 실수요가 꾸준한 지역입니다.',map:'교육 생활권 · 통학 접근성',markers:[[512,195,'좌동 학원가'],[300,230,'센텀 교육권'],[428,303,'중동 중·고교권']]},
traffic:{kicker:'ROAD NETWORK',score:86,title:'광안대교와 동해고속도로를 잇는 생활축',description:'광안대교·수영강변대로를 통한 도심 접근과 동해고속도로 진입이 편리합니다. 출퇴근 시간대 정체를 감안하더라도 부산 동부권 이동의 핵심 거점입니다.',metrics:[['광안대교','차량 12분','우동 기준'],['해운대IC','차량 18분','중동 기준'],['도심 접근','평균 34분','서면 기준']],note:'우동·재송동은 광안대교와 센텀시티 접근성이 우수하고, 좌동은 동해고속도로 이용 편의성이 돋보입니다.',map:'주요 도로 접근성',markers:[[306,252,'광안대교'],[205,115,'수영강변대로'],[540,180,'해운대IC']]},
subway:{kicker:'METRO ACCESS',score:90,title:'2호선과 동해선, 촘촘한 역세권',description:'부산 2호선이 해안 생활권을 관통하고 동해선이 센텀·재송 생활권을 연결합니다. 주요 역 주변으로 업무·상업·주거 기능이 복합적으로 성장하고 있습니다.',metrics:[['도시철도역','9개 역','구내 기준'],['평균 역 거리','도보 9분','주요 단지'],['환승 거점','2개소','벡스코·센텀']],note:'벡스코역은 2호선과 동해선 환승이 가능해 센텀 생활권의 직주근접 가치를 강화합니다.',map:'철도 역세권 반경',markers:[[290,225,'벡스코역'],[390,300,'해운대역'],[520,235,'장산역']]},
ktx:{kicker:'REGIONAL RAIL',score:71,title:'부산역·부전역과 연결되는 광역 이동망',description:'현재 KTX 이용은 부산역 중심이지만, 동해선과 도시철도를 통한 연계가 가능합니다. 부전역 복합환승센터 개발은 해운대권 광역 이동 편의를 높일 요인입니다.',metrics:[['부산역','약 45분','대중교통'],['부전역','약 28분','동해선'],['서울 이동','약 3시간','KTX 환승']],note:'KTX 직접 역세권은 아니지만 동해선 접근성이 좋은 센텀·재송권은 부전역 연계 효과를 기대할 수 있습니다.',map:'KTX 연계 이동시간',markers:[[205,130,'센텀역'],[245,198,'재송역'],[112,325,'부산역 방향']]},
gtx:{kicker:'FUTURE MOBILITY',score:64,title:'부산형 급행철도, 미래 가치의 변수',description:'부산 도심형 급행철도와 차세대 광역교통망은 아직 계획·검토 단계가 포함돼 있습니다. 확정 노선과 개통 시점은 관계기관 발표를 지속적으로 확인해야 합니다.',metrics:[['계획 단계','검토·추진','노선별 상이'],['예상 수혜권','센텀권','환승 거점'],['확정 정보','공식 발표','확인 필요']],note:'미확정 교통 호재는 가격에 선반영될 수 있으므로, 노선 확정·예비타당성·착공 여부를 단계별로 구분해 판단해야 합니다.',map:'광역급행 계획 영향권',markers:[[310,235,'센텀 환승축'],[430,285,'해운대 생활권'],[145,165,'도심 연결축']]}}
const dongProfiles={전체:{price:1,index:0,volume:1,population:375842},우동:{price:1.32,index:1.6,volume:1.25,population:54210},중동:{price:1.19,index:.9,volume:1.05,population:47280},좌동:{price:.9,index:.4,volume:1.1,population:58340},송정동:{price:.84,index:.3,volume:.55,population:11280},재송동:{price:.82,index:-.2,volume:1.15,population:61240},반여동:{price:.62,index:-.8,volume:1,population:64820},반송동:{price:.42,index:-1.1,volume:.6,population:43520},석대동:{price:.58,index:-.5,volume:.2,population:5152}};
const momentumNames=['우동','중동','좌동','송정동','재송동','석대동','반여동','반송동'];
const filterState={dong:'전체',date:'2026-10-22'};
const aptLocations={'엘시티 더샵':[518,290,'해운대해변로 30'],'마린시티자이':[367,272,'마린시티1로 9'],'해운대아이파크':[344,250,'마린시티2로 38'],'트럼프월드센텀Ⅰ':[296,204,'센텀동로 9'],'두산위브더제니스':[351,235,'마린시티2로 33'],'경동제이드':[389,278,'해운대해변로 197'],'대우월드마크센텀':[314,221,'센텀동로 25'],'롯데캐슬스타':[476,282,'중동2로 16'],'해운대경동리인뷰':[495,260,'달맞이길 30'],'센텀파크1차':[245,149,'센텀중앙로 142'],'해운대힐스테이트위브':[455,226,'좌동순환로 433']};
const aptAreaProfiles={beach:{summary:'해운대 해변 생활권과 상업·관광 인프라를 일상에서 누리는 입지입니다. 해안 조망과 희소성이 강점이며, 중심 상권 접근도 편리합니다.',school:['해운대초','도보 약 11분'],subway:['중동역','도보 약 14분'],commute:['센텀시티','차량 약 18분'],living:['해운대해수욕장','도보 약 2분'],strengths:['해변·상권을 동시에 누리는 생활권','해안 조망과 랜드마크 희소성','달맞이·중동 상권 접근 편리','광역 관광 수요 기반 풍부'],caution:'관광 성수기 교통 혼잡과 해안가 특유의 관리비·시설 유지 조건을 함께 비교해 보세요.'},marine:{summary:'마린시티 중심의 고급 주거·상업 복합 생활권입니다. 광안대교와 센텀 업무지구 접근성이 좋고 해안 산책 인프라가 풍부합니다.',school:['해강초','도보 약 8분'],subway:['동백역','도보 약 13분'],commute:['센텀시티','차량 약 11분'],living:['동백섬 산책로','도보 약 7분'],strengths:['마린시티 완성형 생활 인프라','센텀 업무지구 직주근접','해안 산책·여가 환경 우수','광안대교 진입 접근성'],caution:'출퇴근 시간대 마린시티 진출입 정체와 초고층 주거의 관리비 수준을 확인하는 것이 좋습니다.'},centum:{summary:'센텀 업무·문화·쇼핑 인프라를 가까이 이용하는 직주근접 입지입니다. 도시철도와 동해선 연계성이 좋아 부산 동부권 이동이 편리합니다.',school:['센텀초','도보 약 9분'],subway:['센텀시티역','도보 약 10분'],commute:['벡스코','차량 약 5분'],living:['신세계 센텀시티','도보 약 12분'],strengths:['업무·상업 복합 직주근접','2호선·동해선 광역 연계','대형 문화·전시시설 집중','수영강 수변 생활권'],caution:'벡스코 행사일과 출퇴근 시간 교통량이 많아 시간대별 차량 동선을 살펴볼 필요가 있습니다.'},jungdong:{summary:'해운대 전통 주거지와 해변 상권을 함께 이용하는 균형형 입지입니다. 중동역과 달맞이권 접근성이 생활 편의를 높입니다.',school:['해운대초','도보 약 10분'],subway:['중동역','도보 약 9분'],commute:['센텀시티','차량 약 17분'],living:['중동 상권','도보 약 5분'],strengths:['중동역 중심 생활 편의','해변·달맞이권 접근성','병원·마트 등 생활시설 풍부','해운대 중심 상권 인접'],caution:'구간별 경사와 관광철 교통량 차이가 있어 실제 보행 동선과 차량 진입로를 확인해 보세요.'}};
const aptInsights={'엘시티 더샵':['beach',94],'마린시티자이':['marine',92],'해운대아이파크':['marine',91],'트럼프월드센텀Ⅰ':['centum',90],'두산위브더제니스':['marine',93],'경동제이드':['marine',89],'대우월드마크센텀':['centum',89],'롯데캐슬스타':['jungdong',87],'해운대경동리인뷰':['jungdong',88],'센텀파크1차':['centum',91],'해운대힐스테이트위브':['jungdong',86]};
const schoolMapZones=[[292,222,106,72,'센텀 교육권','primary'],[442,300,100,68,'중동 중·고교권','secondary'],[523,183,79,59,'좌동 학원가','academy']];
const schoolMapMarkers=[[274,209,'초','초등 통학권','primary'],[416,292,'중','중·고교권','secondary'],[520,178,'학','학원가 밀집권','academy'],[222,126,'초','재송 통학권','primary']];
function monthDelta(){const [y,m]=filterState.date.split('-').map(Number);return (y-2026)*12+(m-10)}
function priceFactor(){return dongProfiles[filterState.dong].price*Math.max(.78,1+monthDelta()*.006)}
function signed(n,digits=2){return `${n>=0?'+':''}${n.toFixed(digits)}%`}
function filteredMarket(type){const base=market[type],profile=dongProfiles[filterState.dong],day=Number(filterState.date.slice(-2)),shift=profile.index+monthDelta()*.12+((day%7)-3)*.03;const values=base.values.map((v,i)=>+(v+shift+(i-11)*monthDelta()*.004).toFixed(1));const changes=base.changes.map((v,i)=>+(v+profile.index*.02+monthDelta()*.004+((i+day)%4-1.5)*.01).toFixed(2));const month=changes.at(-1),year=parseFloat(base.year)+profile.index*.25+monthDelta()*.04;return {...base,current:values.at(-1).toFixed(1),month:signed(month),year:signed(year),values,changes}}
function formatPrice(value){const rounded=Math.max(0,Math.round(value/10)*10),eok=Math.floor(rounded/10000),man=rounded%10000;return eok?`${eok}억${man?` ${man.toLocaleString()}만`:''}`:`${rounded.toLocaleString()}만`}
function scalePriceLabel(label){const f=priceFactor();if(label.includes('/')){const [deposit,rent]=label.split('/').map(s=>s.trim());const n=parseFloat(rent.replace(/[^0-9.]/g,''));return `${deposit} / ${Math.round(n*f).toLocaleString()}만`}if(label.startsWith('월 ')){const n=parseFloat(label.replace(/[^0-9.]/g,''));return `월 ${Math.round(n*f).toLocaleString()}만`}if(label.includes('억')){const match=label.match(/([\d.]+)억(?:\s*([\d,]+)만)?/);if(match?.[2])return formatPrice((parseFloat(match[1])*10000+parseFloat(match[2].replaceAll(',','')))*f);return `${(parseFloat(match?.[1]||'0')*f).toFixed(1)}억`}const n=parseFloat(label.replace(/[^0-9.]/g,''));return `${Math.round(n*f).toLocaleString()}만`}
function renderChart(type){const d=filteredMarket(type);document.querySelector('#indexLegend').textContent=`${d.label} 가격지수`;document.querySelector('#currentIndex').textContent=d.current;document.querySelector('#monthlyChange').textContent=d.month;document.querySelector('#annualChange').textContent=d.year;const points=d.values.map((v,i)=>[i*(1000/(d.values.length-1)),265-(v-98)*20]);const line=points.map((p,i)=>`${i?'L':'M'}${p[0]},${p[1]}`).join(' ');document.querySelector('#linePath').setAttribute('d',line);document.querySelector('#areaPath').setAttribute('d',`${line} L1000,265 L0,265 Z`);document.querySelector('#barGroup').innerHTML=d.changes.map((v,i)=>{const h=Math.abs(v)*45,x=i*(1000/d.changes.length)+24;return `<rect class="chart-bar" x="${x}" y="${v>=0?264-h:264}" width="28" height="${h}" rx="2"></rect>`}).join('');document.querySelector('#pointGroup').innerHTML=points.map((p,i)=>`<circle class="chart-point" cx="${p[0]}" cy="${p[1]}" r="${i===points.length-1?6:3}" data-i="${i}"></circle>`).join('');document.querySelectorAll('.chart-point').forEach(el=>{el.addEventListener('mouseenter',e=>{const i=+e.target.dataset.i,t=document.querySelector('#chartTooltip');t.textContent=`${i+1}개월 전 · ${d.values[i]} (${d.changes[i]>0?'+':''}${d.changes[i]}%)`;t.style.left=`${e.target.cx.baseVal.value/10}%`;t.style.top=`${e.target.cy.baseVal.value}px`;t.style.opacity=1});el.addEventListener('mouseleave',()=>document.querySelector('#chartTooltip').style.opacity=0)})}
function renderRanking(group,type){const root=document.querySelector(`#${group}Ranking`);root.innerHTML=rankData[group][type].map((r,i)=>`<div class="rank-row" role="button" tabindex="0" data-rank-group="${group}" data-rank-type="${type}" data-rank-index="${i}" aria-label="${r[0]} 입지 분석 보기"><div class="rank-name"><i>${String(i+1).padStart(2,'0')}</i><div><b>${r[0]}</b><small>${filterState.dong==='전체'?r[1].split(' · ')[0]:filterState.dong}</small></div></div><span>${r[1].split(' · ')[1]}</span><strong>${scalePriceLabel(r[2])}</strong></div>`).join('');root.querySelectorAll('.rank-row').forEach(row=>{row.addEventListener('click',()=>setSelectedApartment(group,type,+row.dataset.rankIndex,true));row.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setSelectedApartment(group,type,+row.dataset.rankIndex,true)}})})}
function renderApartmentAnalysis(group,type,index){
  const selected=rankData[group][type][index],name=selected[0],loc=aptLocations[name]||[0,0,'해운대구'],insight=aptInsights[name]||['jungdong',82],profile=aptAreaProfiles[insight[0]],dong=filterState.dong==='전체'?selected[1].split(' · ')[0]:filterState.dong,typeLabel=market[type].label,groupLabel=group==='trade'?'실거래가':'평당가격',query=encodeURIComponent(`부산광역시 해운대구 ${loc[2]} ${name}`);
  document.querySelector('#aptAnalysisName').textContent=name;
  document.querySelector('#aptAnalysisAddress').textContent=`${dong} · ${loc[2]}`;
  document.querySelector('#aptAnalysisScore').textContent=insight[1];
  document.querySelector('#aptAnalysisRank').textContent=`${typeLabel} ${groupLabel} ${index+1}위`;
  document.querySelector('#aptAnalysisDate').textContent=`${filterState.date.replaceAll('-','.')} 기준`;
  document.querySelector('#aptAnalysisSummary').textContent=profile.summary;
  const metrics=[['학군',...profile.school],['지하철',...profile.subway],['업무지 접근',...profile.commute],['생활·여가',...profile.living]];
  document.querySelector('#aptAnalysisMetrics').innerHTML=metrics.map(m=>`<div class="apt-analysis-metric"><span><i></i>${m[0]}</span><strong>${m[1]}</strong><small>${m[2]}</small></div>`).join('');
  document.querySelector('#aptAnalysisStrengths').innerHTML=profile.strengths.map(v=>`<li>${v}</li>`).join('');
  document.querySelector('#aptAnalysisCaution').textContent=profile.caution;
  document.querySelector('#aptAnalysisMapName').textContent=`${name} · ${dong}`;
  document.querySelector('#aptAnalysisMapAddress').textContent=loc[2];
  const map=document.querySelector('#aptAnalysisGoogleMap'),mapUrl=`https://www.google.com/maps?q=${query}&z=16&output=embed`;
  if(map.getAttribute('src')!==mapUrl){map.setAttribute('src',mapUrl);map.setAttribute('title',`${name} Google 지도`)}
  const open=document.querySelector('#aptAnalysisMapOpen');
  open.href=`https://www.google.com/maps/search/?api=1&query=${query}`;
  open.setAttribute('aria-label',`${name} Google 지도에서 크게 보기`);
}
function openApartmentAnalysis(group,type,index){renderApartmentAnalysis(group,type,index);const dialog=document.querySelector('#aptAnalysisDialog');if(!dialog.open)dialog.showModal()}
function setSelectedApartment(group,type,index,showAnalysis=false){document.querySelectorAll('.rank-row').forEach(row=>row.classList.remove('map-active'));document.querySelector(`.rank-row[data-rank-group="${group}"][data-rank-type="${type}"][data-rank-index="${index}"]`)?.classList.add('map-active');if(showAnalysis)openApartmentAnalysis(group,type,index)}
function renderLocation(key){
  const d=locationData[key],isSchool=key==='school';
  document.querySelector('#locationKicker').textContent=d.kicker;
  document.querySelector('#locationScore').textContent=d.score;
  document.querySelector('#locationTitle').textContent=d.title;
  document.querySelector('#locationDescription').textContent=d.description;
  document.querySelector('#locationNote').textContent=d.note;
  document.querySelector('#mapLabel').textContent=d.map;
  document.querySelector('#mapSubtitle').textContent=isSchool?'학교급·학원가·도보 통학 영향권':'주요 거점과 생활권 접근성';
  document.querySelector('#mapDisclaimer').textContent=isSchool?'개념 분석도 · 실제 학교 배정과 통학구역은 교육청 확인':'생활권 접근성을 단순화한 개념 분석도';
  document.querySelector('#locationMapArt').setAttribute('aria-label',isSchool?'해운대구 교육 생활권 개념 분석도':`해운대구 ${d.map} 개념 분석도`);
  document.querySelector('#locationMetrics').innerHTML=d.metrics.map(m=>`<div class="metric"><span>${m[0]}</span><strong>${m[1]}</strong><small>${m[2]}</small></div>`).join('');
  document.querySelector('#mapZones').innerHTML=isSchool?schoolMapZones.map(z=>`<g class="education-zone zone-${z[5]}"><ellipse class="education-zone-fill" cx="${z[0]}" cy="${z[1]}" rx="${z[2]}" ry="${z[3]}"/><ellipse class="education-zone-ring" cx="${z[0]}" cy="${z[1]}" rx="${z[2]-13}" ry="${z[3]-10}"/><text class="education-zone-label" x="${z[0]}" y="${z[1]+z[3]-10}">${z[4]}</text></g>`).join(''):'';
  document.querySelector('#mapMarkers').innerHTML=isSchool?schoolMapMarkers.map(m=>`<g class="education-marker marker-${m[4]}"><circle class="education-marker-halo" cx="${m[0]}" cy="${m[1]}" r="22"/><circle class="education-marker-core" cx="${m[0]}" cy="${m[1]}" r="14"/><text class="education-marker-letter" x="${m[0]}" y="${m[1]+4}">${m[2]}</text><text class="education-marker-label" x="${m[0]+20}" y="${m[1]-12}">${m[3]}</text></g>`).join(''):d.markers.map(m=>`<g><circle class="marker-ring" cx="${m[0]}" cy="${m[1]}" r="24"/><circle class="marker-ring" cx="${m[0]}" cy="${m[1]}" r="14"/><circle class="marker-core" cx="${m[0]}" cy="${m[1]}" r="7"/><text class="marker-label" x="${m[0]+13}" y="${m[1]-10}">${m[2]}</text></g>`).join('');
  document.querySelector('#mapLegend').innerHTML=isSchool?'<span><i class="school-primary">초</i> 초등 통학권</span><span><i class="school-secondary">중</i> 중·고교권</span><span><i class="school-academy">학</i> 학원가</span>':'<span><i class="hot"></i> 핵심권역</span><span><i class="mid"></i> 영향권</span><span><i class="low"></i> 생활권</span>';
}
function activeType(group){return document.querySelector(`[data-group="${group}"] .active`)?.dataset.type||'sale'}
function dateLabels(){const end=new Date(`${filterState.date}T00:00:00`),labels=[];for(let i=6;i>=0;i--){const d=new Date(end.getFullYear(),end.getMonth()-i*2,1);labels.push(`${String(d.getFullYear()).slice(2)}.${String(d.getMonth()+1).padStart(2,'0')}`)}document.querySelector('.x-axis').innerHTML=labels.map(v=>`<span>${v}</span>`).join('')}
function setBriefTrend(id,value){const el=document.querySelector(id);el.textContent=value;el.className=parseFloat(value)<0?'down':'up'}
function renderBriefing(sale,jeonse,profile,f){
  const avgSale=84250*f,ratio=Math.max(48,Math.min(63,55+(1-profile.price)*3+monthDelta()*.05)),avgJeonse=avgSale*ratio/100,pir=Math.max(5.6,12.4*profile.price*(1+monthDelta()*.002));
  document.querySelector('#briefingDate').textContent=filterState.date.replaceAll('-','.');
  document.querySelector('#briefSaleIndex').textContent=sale.current;
  document.querySelector('#briefJeonseIndex').textContent=jeonse.current;
  document.querySelector('#briefAvgSale').textContent=formatPrice(avgSale);
  document.querySelector('#briefAvgJeonse').textContent=formatPrice(avgJeonse);
  document.querySelector('#briefJeonseRatio').textContent=`${ratio.toFixed(1)}%`;
  document.querySelector('#briefPir').textContent=`${pir.toFixed(1)}배`;
  setBriefTrend('#briefSaleChange',sale.month);
  setBriefTrend('#briefJeonseChange',jeonse.month);
  setBriefTrend('#briefAvgSaleChange',sale.year);
  setBriefTrend('#briefAvgJeonseChange',jeonse.year);
  document.querySelector('#briefRatioNote').textContent=`전월 대비 ${monthDelta()>=0?'+':''}${(.2+monthDelta()*.02).toFixed(1)}%p`;
  document.querySelector('#briefPirNote').textContent=filterState.dong==='전체'?'해운대구 추정치':`${filterState.dong} 추정치`;
}
function renderMomentumOutlook(profile){
  const day=Number(filterState.date.slice(-2)),shift=monthDelta()*.01+((day%5)-2)*.005;
  const momentum=momentumNames.map(name=>({name,value:+Math.max(.03,.22+dongProfiles[name].index*.2+shift).toFixed(2)})).sort((a,b)=>b.value-a.value);
  const max=momentum[0].value,root=document.querySelector('#dongMomentum');
  root.innerHTML=momentum.slice(0,6).map((item,i)=>`<button class="momentum-row${filterState.dong===item.name?' selected':''}" data-dong="${item.name}" aria-label="${item.name} 월간 상승률 ${item.value}%로 조회"><span class="momentum-name">${item.name}<small>${i+1}위</small></span><span class="momentum-track"><i class="momentum-fill" style="--w:${24+item.value/max*76}%"></i></span><strong class="momentum-value">+${item.value.toFixed(2)}%</strong></button>`).join('');
  root.querySelectorAll('.momentum-row').forEach(row=>row.addEventListener('click',()=>{document.querySelector('#dongSelect').value=row.dataset.dong;applyFilters()}));
  const up=Math.max(18,Math.min(42,25.1+profile.index*2.1+monthDelta()*.12)),down=Math.max(8,Math.min(30,13.9-profile.index*1.1-monthDelta()*.05)),flat=100-up-down,index=100+(up-down)*.55+profile.index*.6,delta=.8+profile.index*.12+monthDelta()*.03,flatEnd=up+flat;
  const donut=document.querySelector('#forecastDonut');donut.style.setProperty('--up',`${up.toFixed(1)}%`);donut.style.setProperty('--flat-end',`${flatEnd.toFixed(1)}%`);
  document.querySelector('#outlookIndex').textContent=index.toFixed(1);
  document.querySelector('#outlookDelta').textContent=`전월 대비 ${delta>=0?'+':''}${delta.toFixed(1)}p`;
  document.querySelector('#forecastUp').textContent=`${up.toFixed(1)}%`;
  document.querySelector('#forecastFlat').textContent=`${flat.toFixed(1)}%`;
  document.querySelector('#forecastDown').textContent=`${down.toFixed(1)}%`;
  document.querySelector('#outlookLabel').textContent=up>down+8?'상승 기대 우세':down>up?'하락 우려 우세':'보합 전망 우세';
  document.querySelector('#outlookNote').textContent=filterState.dong==='전체'?'거래가격은 완만한 상승 기대가 우세하지만, 실제 거래량과 금리 흐름을 함께 확인하세요.':`${filterState.dong}은 해운대구 평균 대비 가격 모멘텀과 거래 강도를 함께 비교해 판단하는 것이 좋습니다.`;
}
function updateSummary(){
  const profile=dongProfiles[filterState.dong],f=priceFactor(),date=new Date(`${filterState.date}T00:00:00`),season=1+Math.sin((date.getMonth()+1)*.7)*.08,volume=Math.round(1284*profile.volume*season),sale=filteredMarket('sale'),jeonse=filteredMarket('jeonse'),volumeChange=-4.2+profile.index*.8+monthDelta()*.07;
  document.querySelector('#headerDate').textContent=filterState.date.replaceAll('-','.');
  document.querySelector('#analysisBasis').textContent=`해운대구 ${filterState.dong} · ${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 · 최근 12개월`;
  document.querySelector('#avgSalePrice').textContent=formatPrice(84250*f);
  document.querySelector('#avgPyeongPrice').textContent=`${Math.round(3184*f).toLocaleString()}만`;
  document.querySelector('#recentVolume').textContent=`${volume.toLocaleString()}건`;
  document.querySelector('#avgSaleTrend').innerHTML=`↗ ${sale.year.replace('+','')} <i>전년 대비</i>`;
  document.querySelector('#avgPyeongTrend').innerHTML=`↗ ${Math.max(.2,parseFloat(sale.year)*.38).toFixed(1)}% <i>전년 대비</i>`;
  const vt=document.querySelector('#volumeTrend');vt.className=volumeChange>=0?'up':'down';vt.innerHTML=`${volumeChange>=0?'↗':'↘'} ${Math.abs(volumeChange).toFixed(1)}% <i>전월 대비</i>`;
  const pop=Math.round(profile.population*Math.max(.97,1+monthDelta()*.0006));document.querySelector('.population-value strong').textContent=pop.toLocaleString();
  const households=document.querySelectorAll('.population-foot b');if(households[0])households[0].textContent=Math.round(pop*.456).toLocaleString();
  const lastBar=document.querySelector('.volume-bars i:last-child');if(lastBar){lastBar.querySelector('em').textContent=volume.toLocaleString();lastBar.style.setProperty('--h',`${Math.min(94,38+volume/30)}%`)}
  renderBriefing(sale,jeonse,profile,f);renderMomentumOutlook(profile);dateLabels();
}
function applyFilters(showToast=true){filterState.dong=document.querySelector('#dongSelect').value;filterState.date=document.querySelector('#dateSelect').value||'2026-10-22';updateSummary();renderChart(activeType('index'));renderRanking('trade',activeType('trade'));renderRanking('pyeong',activeType('pyeong'));setSelectedApartment('trade',activeType('trade'),0);if(showToast)toast(`해운대구 ${filterState.dong} · ${filterState.date} 기준으로 조회했습니다.`)}
document.querySelector('#globalFilter').addEventListener('submit',e=>{e.preventDefault();applyFilters()});
document.querySelector('#dongSelect').addEventListener('change',()=>applyFilters());
document.querySelector('#dateSelect').addEventListener('change',()=>applyFilters());
document.querySelectorAll('[data-group]').forEach(group=>group.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{group.querySelectorAll('button').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const key=group.dataset.group;if(key==='index')renderChart(btn.dataset.type);else{renderRanking(key,btn.dataset.type);setSelectedApartment(key,btn.dataset.type,0)}})));
document.querySelectorAll('[data-location]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-location]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');renderLocation(btn.dataset.location)}));
document.querySelectorAll('.more-button').forEach(btn=>btn.addEventListener('click',()=>{const list=document.querySelector(`#${btn.dataset.target}`);list.classList.toggle('expanded');btn.firstChild.textContent=list.classList.contains('expanded')?'상위 5개만 보기 ':'10위까지 전체보기 '}));
document.querySelector('#aptAnalysisClose').addEventListener('click',()=>document.querySelector('#aptAnalysisDialog').close());
document.querySelector('#aptAnalysisDialog').addEventListener('click',e=>{if(e.target===e.currentTarget)e.currentTarget.close()});
function toast(msg){const t=document.querySelector('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2200)}
document.querySelector('#refreshBtn').addEventListener('click',e=>{e.currentTarget.classList.add('spinning');setTimeout(()=>e.currentTarget.classList.remove('spinning'),800);applyFilters();});
document.querySelector('#downloadBtn').addEventListener('click',()=>{const d=filteredMarket(activeType('index')),rows=['month,index,change',...d.values.map((v,i)=>`${i+1},${v},${d.changes[i]}`)];const blob=new Blob([rows.join('\n')],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`haeundae-${filterState.dong}-${filterState.date}.csv`;a.click();URL.revokeObjectURL(a.href);toast('선택한 조건의 CSV 파일을 내려받았습니다.')});
applyFilters(false);renderLocation('school');

