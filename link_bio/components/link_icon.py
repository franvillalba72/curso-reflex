import reflex as rx
import link_bio.styles.styles as styles


def link_icon(url: str, image: str) -> rx.Component:
    return rx.link(
        rx.image(
            src=image,
            width=styles.Size.DEFAULT.value,
            height=styles.Size.DEFAULT.value,
        ),
        href=url,
        is_external=True,
    )
