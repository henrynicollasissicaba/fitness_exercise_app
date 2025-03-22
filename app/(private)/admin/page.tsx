import Container from "@/app/components/tags/Container"
import Section from "@/app/components/tags/Section"
import { checkRole } from "@/app/utils/roles"
import { redirect } from "next/navigation"

export default async function AdminPage(){
    const isAdmin = await checkRole('admin')
    if(!isAdmin){
        redirect("/login")
    }

    return(
        <Section>
            <Container>
                <div>

                </div>
            </Container>
        </Section>
    )
}