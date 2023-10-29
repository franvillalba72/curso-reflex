import reflex as rx
import link_bio.styles.styles as styles
from link_bio.styles.styles import Size
from link_bio.styles.colors import Color, TextColor


def navbar() -> rx.Component:
    return rx.hstack(
        # rx.avatar(name="Francisco Villalba", size="sm", src="avatar.png"),
        rx.box(
            rx.span("franvillalba", color=Color.PRIMARY.value),
            rx.span("web", color=Color.SECONDARY.value),
            style=styles.navbar_title_style,
        ),
        position="sticky",
        bg=Color.CONTENT.value,
        padding_x=Size.DEFAULT.value,
        padding_y=Size.DEFAULT.value,
        z_index="999",
        top="0"
    )
