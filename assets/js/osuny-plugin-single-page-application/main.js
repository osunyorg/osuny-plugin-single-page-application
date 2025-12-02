import Swup from 'swup';
import SwupBodyClassPlugin from '@swup/body-class-plugin';
import SwupA11yPlugin from '@swup/a11y-plugin';

document.addEventListener('DOMContentLoaded', function () {
    const animated = false;

    const swup = new Swup({
        animationSelector: false,
        containers: ['#main', '#document-header .nav-level-1', '#document-footer .nav-level-1'],
        ignoreVisit: (url, { el } = {}) => (
            el?.matches('a[lang]')
        ),
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
        window.osuny.lightbox.reinit();
        window.osuny.slidersFactory.reinit();
        window.osuny.page.init();

        if (animated) {
            setTimeout(() => {
                document.body.classList.remove('is-updating');
            }, 500)
        }

        // TODO : remove this in noesya sites only
        if (window.noesya) {
            window.noesya.footer.reinit();
        }
    });
});

