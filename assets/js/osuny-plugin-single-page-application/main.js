import Swup from 'swup';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupA11yPlugin from '@swup/a11y-plugin';

document.addEventListener('DOMContentLoaded', function () {
    const animated = false;

    const swup = new Swup({
        animationSelector: false,
        containers: ['#main'],
        plugins: [
            new SwupBodyClassPlugin(),
            new SwupA11yPlugin()
        ]
    });

    if (animated) {
        swup.hooks.replace('animation:out:await', async () => {
            await new Promise((resolve) => {
                document.body.classList.add('is-updating');
                setTimeout(resolve, 500);
            });
        });
    }

    swup.hooks.on('page:view', () => {
        window.osuny.menu.close();
        window.noesya.footer.reinit();
        window.osuny.lightbox.reinit();
        window.osuny.slidersFactory.reinit();
        window.osuny.page.init();

        if (animated) {
            setTimeout(() => {
                document.body.classList.remove('is-updating');
            }, 500)
        }
    });
});

