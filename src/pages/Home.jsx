import { BaseLayout } from "../layouts/BaseLayout"
import { Postcard } from "../components/PostCard";

export const Home = () => {
    return (
        <BaseLayout>
            <div className='post-grid'>
                <Postcard post={{
                    title: "Hello World",
                    description: " lorem  ",
                    id: 1
                }} />
                <Postcard id={2} />
                <Postcard id={3} />
                <Postcard id={4} />
                <Postcard id={5} />
                <Postcard id={6} />
            </div>
        </BaseLayout>
    )
}