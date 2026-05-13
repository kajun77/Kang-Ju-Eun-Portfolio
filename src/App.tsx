/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { 
  Award, 
  BookOpen, 
  Code, 
  Gamepad2, 
  Heart, 
  Mail, 
  Monitor, 
  Search, 
  Target, 
  User, 
  Zap,
  ArrowRight,
  X
} from "lucide-react";

interface ActivityDetail {
  num: string;
  label: string;
  title: string;
  desc: string;
  fullDesc: string;
  tags: string[];
  link?: string;
  image?: string;
}

const ACTIVITIES: ActivityDetail[] = [
  {
    num: "01",
    label: "3D Production",
    title: "MBC Academy Training",
    desc: "Isometric Room, VR Game Team Project / 6 Months",
    fullDesc: "MBC 아카데미에서 6개월간 진행된 '3D 제작자 양성 과정'입니다. Blender를 활용한 정교한 3D 모델링부터 Substance Painter를 이용한 텍스처링, 최종적으로 Unity 시뮬레이션 적용까지 전 과정을 섭렵했습니다. Isometric Room 모작, Ball 게임 제작, VR 게임 1인 및 팀 프로젝트 제작 등의 실무 경험을 쌓았습니다.",
    tags: ["Blender", "Substance Painter", "Unity", "VR"],
    link: "https://www.behance.net/gallery/232734953/3D-modeler-Portfolio"
  },
  {
    num: "02",
    label: "Ad Production",
    title: "De Beers Viral / SCAMPER",
    desc: "Persona mapping & ROI based ideation",
    fullDesc: "드비어스 바이럴 광고 제작 프로젝트입니다. 스토리보드 제작 이후 ROI 분석과 페르소나 설정을 진행했습니다. 특히 스캠퍼(SCAMPER) 기법을 통한 아이데이션 작업을 통해 광고 제작 시 철저하게 고객의 입장에서 생각하는 법을 익혔습니다.",
    tags: ["Market Analysis", "Persona", "SCAMPER", "Viral Ad"],
    image: "https://private-user-images.githubusercontent.com/220111588/591759761-11e21b83-1269-4291-b2f0-48acddf0174a.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzg2NzYwNTksIm5iZiI6MTc3ODY3NTc1OSwicGF0aCI6Ii8yMjAxMTE1ODgvNTkxNzU5NzYxLTExZTIxYjgzLTEyNjktNDI5MS1iMmYwLTQ4YWNkZGYwMTc0YS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUxM1QxMjM1NTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jYTIyYWIzNTRmYjg3YzZkNmU5NmM2NDFmYWViNjBmYjM3Y2I0Mzc3YzM1ZWI4ODBhYjlhOTk5N2YxMTcwZDk5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.Hgty0cdUpROXhYYVJ8VYZQGtO1IvIdCGIn7wYMSmYQg"
  },
  {
    num: "03",
    label: "Motion Graphics",
    title: "Alice in Wonderland Trailer",
    desc: "Storyboarding to AE Post-production",
    fullDesc: "'앨리스 죽이기' 북트레일러 제작 경험입니다. 초기 스토리보드 구상부터 포토샵을 통한 콘셉트 디자인, After Effects를 활용한 모션 그래픽 작업 및 최종 편집까지 1인 제작 공정을 완수했습니다.",
    tags: ["After Effects", "Photoshop", "Motion Graphics", "Editing"],
    link: "https://youtu.be/Ucios8Oxcgo?si=pu5hB9HfD_euyySQ",
    image: "https://private-user-images.githubusercontent.com/220111588/591759762-ec0861b1-9266-4c8d-9a0d-1d728acba51a.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzg2NzU2MzgsIm5iZiI6MTc3ODY3NTMzOCwicGF0aCI6Ii8yMjAxMTE1ODgvNTkxNzU5NzYyLWVjMDg2MWIxLTkyNjYtNGM4ZC05YTBkLTFkNzI4YWNiYTUxYS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUxM1QxMjI4NThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01MDI2YjU2ZjhhNzgwZmQ1ZDIxNzM5NDcxMjM3MjNiYmU5ZWMxZDc2MDY4ZmE1YjI1MDM4MTQ1ODljYWY2NGE1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.RbfsxRy6fZnHxISwp-ruhMfdr1RpfCFctjBz-7y0RDk"
  },
  {
    num: "04",
    label: "Marketing",
    title: "Chris & Dave Ad Agency",
    desc: "Performance marketing & content execution",
    fullDesc: "광고대행사 크리스앤데이브에서의 실무 경험입니다. 촉박한 업무 마감 기간 속에서도 야근과 연장근무를 불사하며 맡은 바 마케팅 업무를 완벽하게 수행하기 위해 노력했습니다.",
    tags: ["Performance Marketing", "Content Strategy", "Agency Experience"]
  },
  {
    num: "05",
    label: "Job Training",
    title: "KOCCA / Digital Conversion",
    desc: "Award-winning job training course",
    fullDesc: "한국디지털컨버전스협회에서 3개월간 '광고컨텐츠 제작 직업교육'을 이수했습니다. 끈기 있게 스스로를 단련하여 훈련 과정에서 최종 우수상을 수상하며 전문성을 인정받았습니다.",
    tags: ["Advertising", "Job Training", "Awarded"],
    image: "https://private-user-images.githubusercontent.com/220111588/591759689-d8605d2f-6330-4e54-850d-121095be96a2.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzg2NzU2MzgsIm5iZiI6MTc3ODY3NTMzOCwicGF0aCI6Ii8yMjAxMTE1ODgvNTkxNzU5Njg5LWQ4NjA1ZDJmLTYzMzAtNGU1NC04NTBkLTEyMTA5NWJlOTZhMi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUxM1QxMjI4NThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lM2I5ODA5ZjU4NWM0NWEwNmRhNGU0MjEzZGMwNmYyZDRlNzMwY2I2MjMxZjdiOTA4MmY1YjhjYWYxOTNmMGI2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZqcGVnIn0.DjK8uxfM_x1-UeiVPP0j4sDOrSRZfn3jTyLcMR98dYg"
  },
  {
    num: "06",
    label: "Certification",
    title: "Curreeron Program",
    desc: "Professional business adaptation training",
    fullDesc: "신한 커리어온 활동을 통해 실무 환경에 빠르게 적응하고 회사에 실질적인 도움이 되는 구성원이 되는 법을 체득했습니다.",
    tags: ["Career Training", "Business Logic", "Soft Skills"],
    image: "https://private-user-images.githubusercontent.com/220111588/591759690-45f815ca-0bbc-4d7d-b32f-9f016cedc2af.jpg?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Nzg2NzU2MzgsIm5iZiI6MTc3ODY3NTMzOCwicGF0aCI6Ii8yMjAxMTE1ODgvNTkxNzU5NjkwLTQ1ZjgxNWNhLTBiYmMtNGQ3ZC1iMzJmLTlmMDE2Y2VkYzJhZi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTEzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUxM1QxMjI4NThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00YTA3Y2UyNWNhOTRkNGJhN2VlZDQ3OGQyZjM3NWNhY2Y1NjA0OGY3ZTVmZWFkZmVjMWNhYjA5N2Q0YWIxYzZjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZqcGVnIn0.Wx_2X1xY-kU2T82VMR0FWAGLkEsbqjnuk_jZm13-tCM"
  }
];

export default function App() {
  const [selectedActivity, setSelectedActivity] = useState<ActivityDetail | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen relative flex bg-bg overflow-x-hidden">
      <div className="noise-overlay" />
      
      {/* Sidebar Vertical Text */}
      <aside className="hidden lg:flex w-20 brutalist-border flex-none items-center justify-center">
        <div className="vertical-text uppercase font-black text-xs tracking-[0.4em] opacity-30 whitespace-nowrap">
          PORTFOLIO — 2026 — SEOUL — KANG JU EUN
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col brutalist-border overflow-y-auto">
        
        {/* Header Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 brutalist-border border-t-0 border-x-0">
          <div className="md:col-span-2 p-8 md:p-16 flex flex-col justify-end min-h-[40vh] brutalist-border border-y-0 border-l-0">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants} className="accent-box">3D Modeler & Designer</motion.div>
              <motion.h1 variants={itemVariants} className="massive-title">
                KANG<br />JU EUN
              </motion.h1>
            </motion.div>
          </div>
          <div className="p-8 md:p-12 flex flex-col justify-end bg-surface">
            <p className="text-neon uppercase text-[10px] font-black tracking-widest mb-4">Introduction</p>
            <p className="text-sm md:text-md leading-relaxed opacity-70 mb-6">
              끊임없이 공부하고 성취하는<br />
              MZ 제너레이션 크리에이티브 인재 강주은입니다.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Blender', 'Unity', 'Substance', 'AE'].map(tool => (
                <span key={tool} className="tool-tag">{tool}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy & Stats Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 brutalist-border border-x-0 border-t-0">
          <div className="p-10 brutalist-border border-y-0 border-l-0">
            <p className="text-neon uppercase text-[10px] font-black tracking-widest mb-6">Core Philosophy</p>
            <blockquote className="text-2xl font-bold italic border-l-4 border-neon pl-4 mb-6 leading-tight">
              "개성이 없다는 평가가 <br /> 나를 움직였다."
            </blockquote>
            <p className="text-xs leading-relaxed opacity-60">
              화려한 네온 컬러와 독특한 개성으로 무장한 모델러. 
              교과우수상을 수상하게 한 끈질긴 완벽주의가 저의 무기입니다. 
              몰두하는 성격을 기한 관리로 승화시켰습니다.
            </p>
          </div>
          <div className="p-0 grid grid-cols-2 brutalist-border border-y-0">
            <div className="flex flex-col items-center justify-center p-8 brutalist-border border-y-0 border-l-0">
              <span className="text-5xl font-black text-neon">6+</span>
              <span className="text-[10px] uppercase font-bold opacity-40 mt-2">Months 3D</span>
            </div>
            <div className="flex flex-col items-center justify-center p-8">
              <span className="text-5xl font-black text-neon">WIN</span>
              <span className="text-[10px] uppercase font-bold opacity-40 mt-2">Awards</span>
            </div>
          </div>
          <div className="p-10 bg-neon text-black">
            <p className="text-[10px] uppercase font-black opacity-60 mb-4">Future Vision</p>
            <h3 className="text-xl font-black leading-tight mb-4 uppercase">
              AI 기술과 3D 모델링의 <br />융합을 꿈꾸는 인재
            </h3>
            <p className="text-xs font-bold leading-relaxed">
              기술 환경에 빠르게 적응하여 회사의 경쟁력을 높이는 핵심적인 실무자로 성장하겠습니다.
            </p>
          </div>
        </section>

        {/* Activities List */}
        <section className="p-8 md:p-16 brutalist-border border-x-0 border-t-0 overflow-hidden">
          <div className="flex justify-between items-baseline mb-12">
            <h2 className="text-4xl md:text-6xl font-black">Recent Activities</h2>
            <div className="h-2 w-20 bg-neon" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {ACTIVITIES.map((activity) => (
              <ActivityItem 
                key={activity.num}
                num={activity.num} 
                label={activity.label} 
                title={activity.title} 
                desc={activity.desc} 
                onClick={() => setSelectedActivity(activity)}
              />
            ))}
          </div>
        </section>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedActivity && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-bg/90 backdrop-blur-md"
              onClick={() => setSelectedActivity(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="w-full max-w-2xl bg-surface brutalist-border p-8 md:p-12 relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="noise-overlay opacity-5" />
                <button 
                  className="absolute right-6 top-6 p-2 brutalist-border hover:bg-neon hover:text-black transition-all z-20"
                  onClick={() => setSelectedActivity(null)}
                >
                  <X size={24} />
                </button>

                <div className="relative z-10 flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <span className="text-neon text-xs font-black uppercase tracking-widest mb-2 block">
                      Activity {selectedActivity.num} / {selectedActivity.label}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 leading-none uppercase">
                      {selectedActivity.title}
                    </h2>
                    <div className="h-1 w-20 bg-neon mb-6" />
                    <p className="text-md leading-relaxed opacity-80 mb-8 font-medium">
                      {selectedActivity.fullDesc}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedActivity.tags.map(tag => (
                        <span key={tag} className="tool-tag !text-[9px] !px-2 !py-1">#{tag}</span>
                      ))}
                    </div>
                    {selectedActivity.link && (
                      <a 
                        href={selectedActivity.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-neon text-black px-6 py-3 font-black uppercase text-xs hover:bg-white transition-colors"
                      >
                        View Project <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                  {selectedActivity.image && (
                    <div className="w-full md:w-64 flex-none">
                      <div className="brutalist-border p-1 bg-surface min-h-[100px] flex items-center justify-center relative group/img">
                        <img 
                          src={selectedActivity.image} 
                          alt={selectedActivity.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              const msg = document.createElement('div');
                              msg.className = 'text-[10px] font-bold text-neon p-4 text-center';
                              msg.innerText = 'IMAGE LINK EXPIRED (GITHUB PRIVATE LINK)';
                              parent.appendChild(msg);
                            }
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                <span className="absolute -bottom-10 -right-10 text-[200px] font-black opacity-[0.02] leading-none select-none">
                  {selectedActivity.num}
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="p-8 md:p-12 brutalist-border border-x-0 border-t-0 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left w-full md:w-auto">
            <p className="text-[10px] uppercase font-black tracking-widest text-neon mb-2">Connect</p>
            <h4 className="text-2xl font-black">JUN022505@GMAIL.COM</h4>
          </div>
          <div className="flex gap-4 w-full md:w-auto justify-end">
            <SocialLink icon={<Mail size={20} />} />
            <SocialLink icon={<Monitor size={20} />} />
            <SocialLink icon={<Target size={20} />} />
          </div>
        </footer>
      </main>
    </div>
  );
}

interface ActivityItemProps {
  num: string;
  label: string;
  title: string;
  desc: string;
  onClick: () => void;
  key?: React.Key;
}

function ActivityItem({ num, label, title, desc, onClick }: ActivityItemProps) {
  return (
    <div 
      className="bg-bg p-8 hover:bg-surface transition-all group relative overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <span className="absolute right-4 top-4 text-8xl font-black opacity-[0.03] group-hover:opacity-[0.08] transition-opacity leading-none">
        {num}
      </span>
      <div className="relative z-10">
        <p className="text-neon text-[10px] font-black uppercase mb-1">{label}</p>
        <h3 className="text-xl font-black mb-2 uppercase group-hover:text-neon transition-colors">{title}</h3>
        <p className="text-xs opacity-50 font-bold group-hover:opacity-80 transition-opacity">{desc}</p>
      </div>
    </div>
  );
}

function SocialLink({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="p-4 brutalist-border hover:bg-neon hover:text-black transition-all">
      {icon}
    </a>
  );
}

