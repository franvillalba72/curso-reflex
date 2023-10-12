import reflex as rx
import datetime


def footer() -> rx.Component:
    return rx.vstack(
        rx.avatar(name="Francisco Villalba", size="md", src="avatar.png"),
        rx.text(
            f"© {datetime.date.today().year} ",
            rx.link(
                "villalbatech by Fran Villalba",
                href="http://franvillalbaweb.es",
                is_external=True
            )
        ),
        rx.text("Creating magic since 2001")
    )
