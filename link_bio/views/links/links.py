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
            url="http://twitch.tv",
            image="icons/twitch.svg"
        ),
        link_button(
            "YouTube",
            "Tutoriales semanales",
            url="http://youtube.com",
            image="icons/youtube.svg"
        ),
        link_button(
            "Discord",
            "El chat de la comunidad",
            url="https://discord.com/",
            image="icons/twitch.svg"
        ),
        title("Contacto"),
        link_button(
            "Email",
            "francisco.villalba@franvillalbaweb.es",
            f"mailto:francisco.villalba@franvillalbaweb.es",
            image="icons/email.svg"
        ),
        width="100%",
        spacing=Size.MEDIUM.value,
    )
