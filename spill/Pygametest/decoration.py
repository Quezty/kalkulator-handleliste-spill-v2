import pygame
from settings import vertical_tile_number, tile_size, screen_width

class Sky:
    def __init__(self,):
        self.full = pygame.image.load("maps_and_images\\Full Moon - background.png").convert_alpha()

        #stretching
        # self.full = pygame.transform.scale(self.full, (screen_width, tile_size))

    def draw(self, surface):
        for row in range(vertical_tile_number):
            y = row * tile_size
            surface.blit(self.full, (0, 0))