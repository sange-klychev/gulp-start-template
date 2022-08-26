import sprite from 'gulp-svg-sprite';

export const svgSprite = () =>
    app.gulp.src(app.path.src.svgIcons, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SVG',
                message: 'Error: <%= error.message %>'
            })
        ))
        .pipe(sprite({
            mode: {
                stack: {
                    sprite: '../icons/icons.svg',
                    // Создавать страницу с перечнем иконок
                    example: true
                }
            }
        }))
        .pipe(app.gulp.dest(app.path.build.images));