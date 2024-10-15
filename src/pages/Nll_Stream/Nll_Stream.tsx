import NllHeader from '../../components/Nll_Header/Nll_Header'
import Nll_VideoPlayer from '../../components/Nll_VideoPlayer/Nll_VideoPlayer'
import Nll_VideoAside from '../../components/Nll_VideoAside/Nll_VideoAside'
import Nll_Footer from '../../components/Nll_Footer/Nll_Footer'

export default function Nll_Stream() {
    return (
        <>
            <NllHeader />
            <section className="Nll_section Nll_grid_layout">
                <main className="Nll_vid_section" role="complementary">
                    <Nll_VideoPlayer
                        src="./video/Render.mp4"
                        poster="./img/thumb_01.png"
                    />
                </main>
                <Nll_VideoAside />
            </section>
            <Nll_Footer />
        </>
    );
}