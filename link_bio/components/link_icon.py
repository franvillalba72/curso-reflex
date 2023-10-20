import reflex as rx
import link_bio.styles.styles as styles


def link_icon(url: str) -> rx.Component:
    return rx.link(
        rx.icon(
            tag="link",
            width=styles.Size.DEFAULT.value,
            height=styles.Size.DEFAULT.value,
        ),
        href=url,
        is_external=True,
    )
