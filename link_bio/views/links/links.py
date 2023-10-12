import reflex as rx
from link_bio.components.link_button import link_button


def links() -> rx.Component:
    return rx.vstack(
        link_button("Twitch", url="http://twitch.tv"),
        link_button("YouTube", url="http://youtube.com"),
    )
