import { useState, useEffect } from "react";
import { wikiData } from "@/data/wiki_content";
import { WikiLayout } from "@/components/WikiLayout";
import { GlassworthyLens } from "@/components/GlassworthyLens";
import { ExternalLink } from "lucide-react";

export function WikiPage() {
  const [lensActive, setLensActive] = useState(false);
  const [glitchIntensity, setGlitchIntensity] = useState(0);

  useEffect(() => {
    if (lensActive) {
      const interval = setInterval(() => {
        setGlitchIntensity(Math.random());
      }, 150);
      return () => clearInterval(interval);
    } else {
      setGlitchIntensity(0);
    }
  }, [lensActive]);

  const renderContent = (content: string, sectionId: string) => {
    if (lensActive && wikiData.hiddenLore[sectionId as keyof typeof wikiData.hiddenLore]) {
      return (
        <div className="font-mono text-green-400 bg-black p-4 rounded border border-green-500 shadow-[0_0_10px_rgba(0,255,0,0.3)] animate-pulse">
          <div className="flex items-center gap-2 mb-2 border-b border-green-500 pb-1">
            <span className="text-xs uppercase tracking-widest">Reality Filter: Bypassed</span>
          </div>
          <div className="whitespace-pre-wrap">
            {wikiData.hiddenLore[sectionId as keyof typeof wikiData.hiddenLore]}
          </div>
        </div>
      );
    }

    // Process markdown-style links and images
    const parts = content.split(/(\[.*?\]\(.*?\)|!\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      // Handle Images: ![Alt Text](URL)
      const imageMatch = part.match(/!\[(.*?)\]\((.*?)\)/);
      if (imageMatch) {
        return (
          <div key={index} className="my-4 border border-gray-200 bg-gray-50 p-1 rounded-sm max-w-md mx-auto">
            <img src={imageMatch[2]} alt={imageMatch[1]} className="w-full h-auto block" />
            <div className="text-xs text-gray-500 mt-1 px-1 italic text-center">{imageMatch[1]}</div>
          </div>
        );
      }

      // Handle Links: [Text](URL)
      const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
      if (linkMatch) {
        return (
          <a
            key={index}
            href={linkMatch[2]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3366cc] hover:underline hover:text-[#2a4b8d] inline-flex items-baseline gap-0.5"
          >
            {linkMatch[1]}
            <ExternalLink className="w-2.5 h-2.5 opacity-70" />
          </a>
        );
      }

      // Handle Bold Text: **Text**
      const boldParts = part.split(/(\*\*.*?\*\*)/g);
      return (
        <span key={index}>
          {boldParts.map((subPart, subIndex) => {
            if (subPart.startsWith("**") && subPart.endsWith("**")) {
              return <strong key={subIndex} className="font-bold text-black">{subPart.slice(2, -2)}</strong>;
            }
            return subPart;
          })}
        </span>
      );
    });
  };

  return (
    <WikiLayout>
      <div className="max-w-[100vw] overflow-x-hidden">
        {/* Header */}
        <header className="border-b border-[#a2a9b1] mb-4 pb-2">
          <div className="flex items-baseline justify-between flex-wrap gap-2">
            <h1 className={`text-[1.8rem] font-serif border-b-0 mb-0 pb-0 leading-[1.3] ${lensActive ? "font-mono text-green-600 glitch-text" : "text-black"}`} data-text={wikiData.title}>
              {lensActive ? "Subject: Glassworthy_Node_09" : wikiData.title}
            </h1>
            <div className="text-xs text-[#54595d] flex items-center gap-1 bg-gray-100 px-2 py-1 rounded border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-gray-400"></span>
              {lensActive ? "SYSTEM: UNSTABLE" : "SEMI-PROTECTED"}
            </div>
          </div>
          <div className="text-[0.85rem] text-[#54595d] mt-1">
            From Wikipedia, the free encyclopedia
          </div>
        </header>

        {/* Mobile Layout: Stacked */}
        <div className="flex flex-col md:flex-row md:gap-6 relative">
          
          {/* Main Content Column */}
          <div className="flex-1 min-w-0 order-2 md:order-1">
            
            {/* Intro */}
            <div className="mb-6 text-[0.925rem] leading-[1.6] text-[#202122]">
              <p className="mb-4">
                {renderContent(wikiData.intro, "intro")}
              </p>
              
              {/* Table of Contents */}
              <div className="bg-[#f8f9fa] border border-[#a2a9b1] p-3 inline-block min-w-[200px] rounded-sm mb-4">
                <div className="font-bold text-center text-[95%] mb-2">Contents</div>
                <ol className="list-decimal list-inside text-[90%] text-[#3366cc] space-y-1">
                  {wikiData.sections.map((section) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`} className="hover:underline hover:text-[#0645ad]">
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Sections */}
            <div className="space-y-8">
              {wikiData.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-16">
                  <h2 className="text-[1.5rem] font-serif border-b border-[#a2a9b1] mb-4 pb-1 flex items-baseline justify-between group">
                    <span className={lensActive ? "font-mono text-green-700" : "text-black"}>
                      {section.title}
                    </span>
                    <span className="text-[0.8rem] font-sans font-normal text-[#3366cc] opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer select-none">
                      [edit]
                    </span>
                  </h2>
                  <div className="text-[0.925rem] leading-[1.6] text-[#202122] space-y-4">
                    {renderContent(section.content, section.id)}
                  </div>
                </section>
              ))}
            </div>

            {/* References */}
            <section className="mt-12 pt-8 border-t border-[#a2a9b1]">
              <h2 className="text-[1.2rem] font-bold mb-4">References</h2>
              <ol className="list-decimal list-inside text-[0.85rem] text-[#202122] space-y-1 columns-1 md:columns-2 gap-8">
                {wikiData.references.map((ref, i) => (
                  <li key={i} className="break-inside-avoid pl-2 -indent-2">
                    <span className="text-[#3366cc] cursor-pointer hover:underline">^</span> {ref}
                  </li>
                ))}
              </ol>
            </section>

            {/* Categories */}
            <div className="mt-8 border border-[#a2a9b1] bg-[#f8f9fa] p-3 text-[0.85rem]">
              <div className="flex flex-wrap gap-2">
                <span className="font-bold">Categories:</span>
                <span className="text-[#3366cc] hover:underline cursor-pointer">1469 births</span>
                <span className="text-[#202122]">|</span>
                <span className="text-[#3366cc] hover:underline cursor-pointer">Welsh nobility</span>
                <span className="text-[#202122]">|</span>
                <span className="text-[#3366cc] hover:underline cursor-pointer">Cannabis culture</span>
                <span className="text-[#202122]">|</span>
                <span className="text-[#3366cc] hover:underline cursor-pointer">Corporate mascots</span>
                <span className="text-[#202122]">|</span>
                <span className="text-[#3366cc] hover:underline cursor-pointer">Fictional CEOs</span>
                <span className="text-[#202122]">|</span>
                <span className="text-[#3366cc] hover:underline cursor-pointer">Renaissance history</span>
                <span className="text-[#202122]">|</span>
                <span className="text-[#3366cc] hover:underline cursor-pointer">American folklore</span>
              </div>
            </div>
          </div>

          {/* Infobox Column */}
          <div className="w-full md:w-[300px] shrink-0 order-1 md:order-2 mb-6 md:mb-0">
            <div className={`border border-[#a2a9b1] bg-[#f8f9fa] p-1 text-[0.85rem] leading-[1.4] ${lensActive ? "animate-glitch border-green-500 shadow-[0_0_15px_rgba(0,255,0,0.2)]" : ""}`}>
              <div className="bg-[#b0c4de] text-center font-bold p-1 mb-1 border border-[#a2a9b1]">
                {lensActive ? "SIMULATION NODE: 09" : wikiData.infobox.name}
              </div>
              
              <div className="mb-2 border border-[#a2a9b1] bg-white p-1">
                <img 
                  src={wikiData.infobox.image} 
                  alt={wikiData.infobox.name} 
                  className={`w-full h-auto block ${lensActive ? "filter invert hue-rotate-90 contrast-125" : ""}`}
                />
                <div className="text-[0.8rem] text-center mt-1 pt-1 border-t border-gray-100">
                  {lensActive ? "Render of Original Source Code" : wikiData.infobox.caption}
                </div>
              </div>

              <table className="w-full border-collapse">
                <tbody>
                  {[
                    { label: "Character", value: wikiData.infobox.character },
                    { label: "First Appearance", value: wikiData.infobox.first_appearance },
                    { label: "Created by", value: wikiData.infobox.created_by },
                    { label: "Portrayed by", value: wikiData.infobox.portrayed_by },
                    { label: "Alias", value: wikiData.infobox.alias },
                    { label: "Species", value: wikiData.infobox.species },
                    { label: "Gender", value: wikiData.infobox.gender },
                    { label: "Occupation", value: wikiData.infobox.occupation },
                    { label: "Affiliation", value: wikiData.infobox.affiliation },
                    { label: "Family", value: wikiData.infobox.family },
                    { label: "Origin", value: wikiData.infobox.origin },
                    { label: "Signature Item", value: wikiData.infobox.signature_item },
                    { label: "Vehicle", value: wikiData.infobox.vehicle },
                    { label: "Rivals", value: wikiData.infobox.rivals },
                    { label: "Catchphrase", value: wikiData.infobox.catchphrase },
                    { label: "Website", value: wikiData.infobox.website, isLink: true }
                  ].map((row, i) => (
                    <tr key={i}>
                      <th className="text-left align-top py-1 pr-2 font-bold w-[35%]">
                        {row.label}
                      </th>
                      <td className="align-top py-1">
                        {lensActive ? (
                          <span className="font-mono text-green-600 text-xs break-all">
                            {`0x${Math.random().toString(16).substr(2, 8)}`}
                          </span>
                        ) : (
                          row.isLink ? (
                            <a href={`https://${row.value}`} target="_blank" rel="noopener noreferrer" className="text-[#3366cc] hover:underline break-all">
                              {row.value}
                            </a>
                          ) : (
                            <span className="whitespace-pre-line">{row.value}</span>
                          )
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

      {/* Glassworthy Lens Toggle */}
      <GlassworthyLens isActive={lensActive} onToggle={() => setLensActive(!lensActive)} />
    </WikiLayout>
  );
}
