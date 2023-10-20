import reflex as rx
from link_bio.components.link_button import link_button
from link_bio.components.title import title
from link_bio.styles.styles import Size


def links() -> rx.Component:
    return rx.vstack(
        title("Comunidad"),
        link_button(
            "Twitch",
            "Directos de lunes a viernes",
            url="http://twitch.tv"
        ),
        link_button(
            "YouTube",
            "Tutoriales semanales",
            url="http://youtube.com"
        ),
        link_button(
            "Discord",
            "El chat de la comunidad",
            url="https://discord.com/"
        ),
        title("Cursos"),
        link_button(
            "Twitch",
            "Directos de lunes a viernes",
            url="http://twitch.tv"
        ),
        link_button(
            "YouTube",
            "Tutoriales semanales",
            url="http://youtube.com"
        ),
        link_button(
            "Discord",
            "El chat de la comunidad",
            url="https://discord.com/"
        ),
        width="100%",
        spacing=Size.MEDIUM.value,
    )
