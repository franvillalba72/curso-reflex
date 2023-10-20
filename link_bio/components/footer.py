import reflex as rx
import datetime
from link_bio.styles.styles import Size


def footer() -> rx.Component:
    return rx.vstack(
        rx.avatar(name="Francisco Villalba", size="md", src="avatar.png"),
        rx.text(
            rx.link(
                f"© 1995 -{datetime.date.today().year} villalbatech by Fran Villalba",
                href="http://franvillalbaweb.es",
                is_external=True,
                font_size=Size.MEDIUM.value
            )
        ),
        rx.text(
            "BUILDING SOLUTIONS FOR THE WEB 🕸 AND DESKTOP 💻 SINCE 1995",
            font_size=Size.MEDIUM.value,
            margin_top="0px !important"
        ),
        margin_bottom=Size.LARGE.value,
    )
