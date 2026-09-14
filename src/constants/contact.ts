/**
 * Единый источник данных о зале: адрес, контакты, часы работы и координаты.
 * Используется футером и секцией с картой.
 */
export const mapsUrl =
	'https://yandex.ru/maps/org/versal/10211180748/?ll=54.930175%2C56.264428&z=16';

export const vkUrl = 'https://vk.ru/versalyanaul';

export const maxUrl =
	'https://max.ru/u/f9LHodD0cOIKmU9gNwJBRPpYkNAocSmQy9Hr4HvI0NwSOIOailTGukv8zJE';

export const venue = {
	name: 'Версаль',
	kind: 'банкетный зал',
	address: 'ул. Азина, 27Б, Янаул',
	phone: '+7 (917) 375-25-55',
	phoneHref: 'tel:+7 (917) 375-25-55',
	hours: [
		{ days: 'Пт – Сб', time: '09:00 – 00:00' },
		{ days: 'Вс', time: '09:00 – 23:00' },
	],
	coordinates: { lat: 56.264428, lon: 54.930175 },
	mapZoom: 16,
} as const;

/** Ссылка на Яндекс Карты с адресом и точкой. */
// export const mapsUrl = `https://yandex.ru/maps/?text=${encodeURIComponent(
// 	venue.address,
// )}&ll=${venue.coordinates.lon},${venue.coordinates.lat}&z=${venue.mapZoom}`;
