import reflex as rx
from enum import Enum
from .colors import Color, TextColor


# Constants
MAX_WIDTH = "600px"


# Sizes
class Size(Enum):
    ZERO = "0px !important"
    SMALL = ".5em"
    MEDIUM = ".8em"
    DEFAULT = "1em"
    LARGE = "1.5em"
    BIG = "2em"


# Styles
BASE_STYLE = {
    "background-color": Color.BACKGROUND.value,
    rx.Button: {
        "width": "100%",
        "height": "100%",
        "display": "block",
        "padding": Size.SMALL.value,
        "border_radius": Size.DEFAULT.value,
        "color": TextColor.HEADER.value,
        "background-color": Color.CONTENT.value,
        "_hover": {
            "background-color": Color.SECONDARY.value,
        }
    },

    rx.Link: {
        "text_decoration": "none",
        "_hover": {},
    }
}

navbar_title_style = dict(
    # font_family="Comfortaa-Medium",
    font_family="monospace",
    font_size=Size.LARGE.value,
)

title_style = dict(
    width="100%",
    padding_top=Size.DEFAULT.value,
    color=TextColor.HEADER.value,
)

button_title_style = dict(
    font_size=Size.DEFAULT.value,
    color=TextColor.HEADER.value,
)

button_body_style = dict(
    font_size=Size.MEDIUM.value,
    color=TextColor.BODY.value,
)
