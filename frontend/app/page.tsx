import { TextFlipContainer } from "@/components/ContainerTextFlip";
import { GradientButton } from "@/components/HoverBorderGradient";
import Image from "next/image";
import arrow from '../public/arrow.svg'
import men from '../public/man.svg'
import CardSection from "@/components/pageLevel/CardSection";
import ProjectSection from "@/components/pageLevel/ProjectSection";
import ContactSection from "@/components/pageLevel/ContactSection";
import { GlareCard } from "@/components/ui/glare-card";
import WorkExp from "@/components/pageLevel/WorkExp";


export default function Home ()
{
  return (
    <div className="p-5 gap-11">
      <div className="flex flex-row items-end justify-end p-4 gap-10">
        <div className="cursor-pointer">
          Downlode CV
        </div>
        <div className="p-1 bg-[#FFC9F0] cursor-pointer">
          Hire Me
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="box-border size-5/6 p-4 ">
          <div className="grid grid-rows-2">
            <div className="w-2xs h-25 grid grid-cols-3 -rotate-6">
              <Image src={ men } alt="men" />
              <Image src={ arrow } alt="arrow" className="justify-self-center self-center" />
              <div className="text-3xl p-1 w-15 h-10 bg-[#FFC9F0] font-bold font-[Handlee]" >
                DK
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <TextFlipContainer words={ [ 'websites', 'services', 'products', 'systems', 'solutions' ] } prefixText="I develop modern" />
              <div>
                I design, build, and deploy complete digital experiences—transforming ideas into powerful, live web solutions.
                <GradientButton text="Hire me" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardSection />
      <br />
      <ProjectSection />
      <br />
      <WorkExp />
      <br />
      <ContactSection />
    </div>
  );
}
