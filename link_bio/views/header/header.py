import reflex as rx


def header() -> rx.Component:
    return rx.vstack(
        rx.avatar(name="Francisco Villalba", size="xl", src="avatar.png"),
        rx.text("@elmurciano"),
        rx.text("HOLA!! 👨🏻‍💻 MI NOMBRE ES FRAN VILLALBA"),
        rx.text("""Soy desarrollador de software desde hace más de 20 años.
                Actualmente trabajo como desarrollador en una empresa de transportes
                y además como freelance full-stack developer y Python developer. Aquí podrás encontrar
                alguna cosa mas sobre de mi.
                """)
    )
