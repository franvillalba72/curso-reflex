import reflex as rx
from link_bio.styles.styles import Size
from link_bio.components.link_icon import link_icon
from link_bio.components.info_text import info_text


def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(name="Francisco Villalba", size="xl", src="avatar.png"),
            rx.vstack(
                rx.heading(
                    "Fran Villalba",
                    size="lg"
                ),
                rx.text(
                    "@elmurciano",
                    margin_top="0px !important",
                ),
                rx.hstack(
                    link_icon("https://x.com/elmurciano"),
                    link_icon("https://facebook.com/franvillalbagarcia"),
                    link_icon("https://instagram.com/franvillalba"),
                ),
                align_items="start",
            ),
            spacing=Size.LARGE.value,
        ),
        rx.flex(
            info_text("+25", "años de experiencia"),
            rx.spacer(),
            info_text("Desarrollador", "Python y Java"),
            rx.spacer(),
            info_text("Full Stack Developer", "JavaScript y React"),
            width="100%",
        ),
        rx.text(
            """Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla nec augue eget nisl ultrices aliquam. Nulla facilisi. Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla nec augue eget nisl ultrices aliquam. Nulla facilisi. Nulla
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            """
        ),
        align_items="start",
        spacing=Size.LARGE.value,
    )
