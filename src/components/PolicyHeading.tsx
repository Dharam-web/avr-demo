import React from 'react';
import { SectionWithContainer } from './sectionComponants';

interface PolicyHeadingProps {
    heading: string;
    className: string;
    description1?: string;
    description2?: string; // Can include HTML content
}

const PolicyHeading: React.FC<PolicyHeadingProps> = ({ heading, description1, description2, className }) => {
    return (
        <SectionWithContainer sectionClassName={className + " bg-[#F9F9F1]"} containerClassName='flex flex-col gap-5'>
            <h1 className='playfair md:text-[56px] text-2xl font-medium text-[#2F4B26] underline'>{heading}</h1>
            <div>
                {description1 && (
                    <p className='roboto font-light text-[20px]'>
                        {description1}
                    </p>
                )}
                <br />
                {description2 && (
                    <p
                        className='roboto font-light text-[20px]'
                        dangerouslySetInnerHTML={{ __html: description2 }}
                    />
                )}
            </div>
        </SectionWithContainer>
    );
};

export default PolicyHeading;
