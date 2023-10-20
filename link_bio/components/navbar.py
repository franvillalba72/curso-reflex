import reflex as rx
from link_bio.styles.styles import Size


def navbar() -> rx.Component:
    return rx.hstack(
        rx.avatar(name="Francisco Villalba", size="sm", src="avatar.png"),
        rx.text(
            "villalbatech"
        ),
        position="sticky",
        bg="lightgray",
        padding_x=Size.DEFAULT.value,
        padding_y=Size.SMALL.value,
        z_index="999",
        top="0"
    )
