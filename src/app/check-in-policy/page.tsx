import PolicyHeading from '@/components/PolicyHeading'
import { Section, SectionWithContainer } from '@/components/sectionComponants'
import ShowPage from './ShowPage'

const page = () => {
    return (
        <div>
            <Section defaultPadding={false} className='lg:max-h-[476px]'>
                <PolicyHeading
                    className="h-full text-center"
                    heading='Check In Policy'
                />
            </Section>
            <SectionWithContainer>
                <ShowPage />
            </SectionWithContainer>
        </div>
    )
}

export default page