"use strict";(self.webpackChunkvirtualclient=self.webpackChunkvirtualclient||[]).push([[185],{2684:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>l,metadata:()=>t,toc:()=>h});var s=d(5893),n=d(3905);const l={},i="Lzbench",t={id:"workloads/compression/lzbench",title:"Lzbench",description:"lzbench is an in-memory benchmark of open-source LZ77/LZSS/LZMA compressors. It joins all compressors into a single exe. At the beginning an input file is read to memory. Then all compressors are used to compress and decompress the file and decompressed file is verified. This approach has a big advantage of using the same compiler with the same optimizations for all compressors. The disadvantage is that it requires source code of each compressor.",source:"@site/docs/workloads/compression/lzbench.md",sourceDirName:"workloads/compression",slug:"/workloads/compression/lzbench",permalink:"/VirtualClient/docs/workloads/compression/lzbench",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/VirtualClient/edit/main/website/docs/workloads/compression/lzbench.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gzip",permalink:"/VirtualClient/docs/workloads/compression/gzip"},next:{title:"Pbzip2",permalink:"/VirtualClient/docs/workloads/compression/pbzip2"}},c={},h=[{value:"Documentation",id:"documentation",level:3},{value:"Supported Platforms and Architectures",id:"supported-platforms-and-architectures",level:3},{value:"Package Dependencies",id:"package-dependencies",level:3},{value:"Workload Usage",id:"workload-usage",level:3},{value:"Compressors Onboarded",id:"compressors-onboarded",level:3},{value:"What is Being Tested?",id:"what-is-being-tested",level:3}];function x(e){const r={a:"a",h1:"h1",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.ah)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"lzbench",children:"Lzbench"}),"\n",(0,s.jsx)(r.p,{children:"lzbench is an in-memory benchmark of open-source LZ77/LZSS/LZMA compressors. It joins all compressors into a single exe. At the beginning an input file is read to memory. Then all compressors are used to compress and decompress the file and decompressed file is verified. This approach has a big advantage of using the same compiler with the same optimizations for all compressors. The disadvantage is that it requires source code of each compressor."}),"\n",(0,s.jsx)(r.h3,{id:"documentation",children:"Documentation"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/inikep/lzbench",children:"Lzbench"})}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"supported-platforms-and-architectures",children:"Supported Platforms and Architectures"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"linux-x64"}),"\n",(0,s.jsx)(r.li,{children:"linux-arm64"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"package-dependencies",children:"Package Dependencies"}),"\n",(0,s.jsx)(r.p,{children:"The following package dependencies are required to be installed on the Unix/Linux system in order to support the requirements\nof the Lzbench workload. Note that the Virtual Client will handle the installation of any required dependencies."}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"gcc"}),"\n",(0,s.jsx)(r.li,{children:"make"}),"\n",(0,s.jsx)(r.li,{children:"g++"}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"workload-usage",children:"Workload Usage"}),"\n",(0,s.jsx)(r.p,{children:"usage: lzbench [options] input [input2] [input3]"}),"\n",(0,s.jsx)(r.p,{children:"where [input] is a file or a directory and [options] are:\n-b#   set block/chunk size to # KB (default = MIN(filesize,1747626 KB))\n-c#   sort results by column # (1=algname, 2=ctime, 3=dtime, 4=comprsize)\n-e#   #=compressors separated by '/' with parameters specified after ',' (deflt=fast)\n-iX,Y set min. number of compression and decompression iterations (default = 1, 1)\n-j    join files in memory but compress them independently (for many small files)\n-l    list of available compressors and aliases\n-m#   set memory limit to # MB (default = no limit)\n-o#   output text format 1=Markdown, 2=text, 3=text+origSize, 4=CSV (default = 2)\n-p#   print time for all iterations: 1=fastest 2=average 3=median (default = 1)\n-r    operate recursively on directories\n-s#   use only compressors with compression speed over # MB (default = 0 MB)\n-tX,Y set min. time in seconds for compression and decompression (default = 1, 2)\n-v    disable progress information\n-x    disable real-time process priority\n-z    show (de)compression times instead of speed"}),"\n",(0,s.jsx)(r.p,{children:"Example usage:\nlzbench -ezstd filename = selects all levels of zstd\nlzbench -ebrotli,2,5/zstd filename = selects levels 2 & 5 of brotli and zstd\nlzbench -t3 -u5 fname = 3 sec compression and 5 sec decompression loops\nlzbench -t0 -u0 -i3 -j5 -ezstd fname = 3 compression and 5 decompression iter.\nlzbench -t0u0i3j5 -ezstd fname = the same as above with aggregated parameters"}),"\n",(0,s.jsx)(r.h3,{id:"compressors-onboarded",children:"Compressors Onboarded"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.th,{children:"Compressor Name"})})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"memcpy"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"blosclz 2.0.0 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"blosclz 2.0.0 -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"blosclz 2.0.0 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"blosclz 2.0.0 -9"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"brieflz 1.2.0 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"brieflz 1.2.0 -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"brieflz 1.2.0 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"brieflz 1.2.0 -8"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"brotli 2019-10-01 -0"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"brotli 2019-10-01 -2"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"brotli 2019-10-01 -5"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"brotli 2019-10-01 -8"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"brotli 2019-10-01 -11"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"bzip2 1.0.8 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"bzip2 1.0.8 -5"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"bzip2 1.0.8 -9"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"crush 1.0 -0"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"crush 1.0 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"crush 1.0 -2"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"csc 2016-10-13 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"csc 2016-10-13 -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"csc 2016-10-13 -5"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"density 0.14.2 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"density 0.14.2 -2"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"density 0.14.2 -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"fastlz 0.1 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"fastlz 0.1 -2"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"fastlzma2 1.0.1 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"fastlzma2 1.0.1 -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"fastlzma2 1.0.1 -5"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"fastlzma2 1.0.1 -8"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"fastlzma2 1.0.1 -10"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"gipfeli 2016-07-13"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"libdeflate 1.3 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"libdeflate 1.3 -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"libdeflate 1.3 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"libdeflate 1.3 -9"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"libdeflate 1.3 -12"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lizard 1.0 -10"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lizard 1.0 -12"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lizard 1.0 -15"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lizard 1.0 -19"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lizard 1.0 -20"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lizard 1.0 -22"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lizard 1.0 -25"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lizard 1.0 -29"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lizard 1.0 -30"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lizard 1.0 -32"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lizard 1.0 -35"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lizard 1.0 -39"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lizard 1.0 -40"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lizard 1.0 -42"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lizard 1.0 -45"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lizard 1.0 -49"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lz4 1.9.2"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lz4fast 1.9.2 -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lz4fast 1.9.2 -17"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lz4hc 1.9.2 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lz4hc 1.9.2 -4"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lz4hc 1.9.2 -9"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lz4hc 1.9.2 -12"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzf 3.6 -0"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzf 3.6 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzfse 2017-03-08"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzg 1.0.10 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzg 1.0.10 -4"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzg 1.0.10 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzg 1.0.10 -8"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzham 1.0 -d26 -0"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzham 1.0 -d26 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzjb 2010"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzlib 1.11 -0"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzlib 1.11 -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzlib 1.11 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzlib 1.11 -9"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzma 19.00 -0"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzma 19.00 -2"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzma 19.00 -4"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzma 19.00 -5"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzma 19.00 -9"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzmat 1.01"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1 2.10 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1 2.10 -99"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1a 2.10 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1a 2.10 -99"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1b 2.10 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1b 2.10 -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1b 2.10 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1b 2.10 -9"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1b 2.10 -99"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1b 2.10 -999"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1c 2.10 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1c 2.10 -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1c 2.10 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1c 2.10 -9"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1c 2.10 -99"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1c 2.10 -999"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1f 2.10 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1f 2.10 -999"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1x 2.10 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1x 2.10 -11"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1x 2.10 -12"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1x 2.10 -15"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1x 2.10 -999"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1y 2.10 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1y 2.10 -999"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo1z 2.10 -999"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzo2a 2.10 -999"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzrw 15-Jul-1991 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzrw 15-Jul-1991 -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzrw 15-Jul-1991 -4"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzrw 15-Jul-1991 -5"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzsse2 2019-04-18 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzsse2 2019-04-18 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzsse2 2019-04-18 -12"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzsse2 2019-04-18 -16"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzsse4 2019-04-18 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzsse4 2019-04-18 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzsse4 2019-04-18 -12"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzsse4 2019-04-18 -16"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzsse8 2019-04-18 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzsse8 2019-04-18 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzsse8 2019-04-18 -12"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzsse8 2019-04-18 -16"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"lzvn 2017-03-08"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"pithy 2011-12-24 -0"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"pithy 2011-12-24 -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"pithy 2011-12-24 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"pithy 2011-12-24 -9"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"quicklz 1.5.0 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"quicklz 1.5.0 -2"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"quicklz 1.5.0 -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"shrinker 0.1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"slz_zlib 1.0.0 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"slz_zlib 1.0.0 -2"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"slz_zlib 1.0.0 -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"snappy 2019-09-30"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"tornado 0.6a -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"tornado 0.6a -2"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"tornado 0.6a -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"tornado 0.6a -4"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"tornado 0.6a -5"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"tornado 0.6a -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"tornado 0.6a -7"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"tornado 0.6a -10"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"tornado 0.6a -13"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"tornado 0.6a -16"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"ucl_nrv2b 1.03 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"ucl_nrv2b 1.03 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"ucl_nrv2b 1.03 -9"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"ucl_nrv2d 1.03 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"ucl_nrv2d 1.03 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"ucl_nrv2d 1.03 -9"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"ucl_nrv2e 1.03 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"ucl_nrv2e 1.03 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"ucl_nrv2e 1.03 -9"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"wflz 2015-09-16"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"xpack 2016-06-02 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"xpack 2016-06-02 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"xpack 2016-06-02 -9"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"xz 5.2.4 -0"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"xz 5.2.4 -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"xz 5.2.4 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"xz 5.2.4 -9"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"yalz77 2015-09-19 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"yalz77 2015-09-19 -4"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"yalz77 2015-09-19 -8"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"yalz77 2015-09-19 -12"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"yappy 2014-03-22 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"yappy 2014-03-22 -10"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"yappy 2014-03-22 -100"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"zlib 1.2.11 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"zlib 1.2.11 -6"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"zlib 1.2.11 -9"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"zling 2018-10-12 -0"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"zling 2018-10-12 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"zling 2018-10-12 -2"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"zling 2018-10-12 -3"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"zling 2018-10-12 -4"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"zstd 1.4.3 -1"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"zstd 1.4.3 -2"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"zstd 1.4.3 -5"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"zstd 1.4.3 -8"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"zstd 1.4.3 -11"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"zstd 1.4.3 -15"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"zstd 1.4.3 -18"})}),(0,s.jsx)(r.tr,{children:(0,s.jsx)(r.td,{children:"zstd 1.4.3 -22"})})]})]}),"\n",(0,s.jsx)(r.h3,{id:"what-is-being-tested",children:"What is Being Tested?"}),"\n",(0,s.jsx)(r.p,{children:"Lzbench is used to measure performance in terms of compression speed, decompression speed and ratio of compressed size and original size. Below are the metrics measured by Lzbench Workload."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Name"}),(0,s.jsx)(r.th,{children:"Unit"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Compression Speed"}),(0,s.jsx)(r.td,{children:"MB/s"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Decompression Speed"}),(0,s.jsx)(r.td,{children:"MB/s"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Compressed size and original size ratio"}),(0,s.jsx)(r.td,{children:"-"})]})]})]}),"\n",(0,s.jsx)(r.h1,{id:"references",children:"References"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"https://github.com/inikep/lzbench",children:"Lzbench github"})}),"\n"]})]})}function j(e={}){const{wrapper:r}={...(0,n.ah)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},3905:(e,r,d)=>{d.d(r,{ah:()=>h});var s=d(7294);function n(e,r,d){return r in e?Object.defineProperty(e,r,{value:d,enumerable:!0,configurable:!0,writable:!0}):e[r]=d,e}function l(e,r){var d=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),d.push.apply(d,s)}return d}function i(e){for(var r=1;r<arguments.length;r++){var d=null!=arguments[r]?arguments[r]:{};r%2?l(Object(d),!0).forEach((function(r){n(e,r,d[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(d)):l(Object(d)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(d,r))}))}return e}function t(e,r){if(null==e)return{};var d,s,n=function(e,r){if(null==e)return{};var d,s,n={},l=Object.keys(e);for(s=0;s<l.length;s++)d=l[s],r.indexOf(d)>=0||(n[d]=e[d]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)d=l[s],r.indexOf(d)>=0||Object.prototype.propertyIsEnumerable.call(e,d)&&(n[d]=e[d])}return n}var c=s.createContext({}),h=function(e){var r=s.useContext(c),d=r;return e&&(d="function"==typeof e?e(r):i(i({},r),e)),d},x={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},j=s.forwardRef((function(e,r){var d=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,j=t(e,["components","mdxType","originalType","parentName"]),o=h(d),a=n,p=o["".concat(c,".").concat(a)]||o[a]||x[a]||l;return d?s.createElement(p,i(i({ref:r},j),{},{components:d})):s.createElement(p,i({ref:r},j))}));j.displayName="MDXCreateElement"}}]);