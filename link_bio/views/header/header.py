import reflex as rx
from link_bio.styles.styles import Size
from link_bio.styles.colors import TextColor
from link_bio.components.link_icon import link_icon
from link_bio.components.info_text import info_text
import link_bio.constants as constants


def header() -> rx.Component:
    return rx.vstack(
        rx.hstack(
            rx.avatar(name="Francisco Villalba", size="xl", src="avatar.png"),
            rx.vstack(
                rx.heading(
                    "Francisco Villalba",
                    size="lg",
                    color=TextColor.HEADER.value,
                ),
                rx.text(
                    "@elmurciano",
                    margin_top=Size.ZERO.value,
                    color=TextColor.BODY.value,
                ),
                rx.hstack(
                    link_icon(f"{constants.TWITTER_X_URL}elmurciano",
                              image="icons/x-twitter.svg"),
                    link_icon(
                        f"{constants.FACEBOOK_URL}franvillalbagarcia", image="icons/facebook.svg"),
                    link_icon(f"{constants.INSTAGRAM_URL}franvillalba",
                              image="icons/instagram.svg"),
                    color=TextColor.BODY.value,
                ),
                align_items="start",
            ),
            spacing=Size.BIG.value,
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
            """,
            color=TextColor.BODY.value,
        ),
        align_items="start",
        spacing=Size.BIG.value,
    )
