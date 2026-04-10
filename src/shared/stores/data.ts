import type { Product } from "../types/products";

// Взрослые квадрики - 0ebe26bf-3790-40ca-bf73-c6edf58ca3fe
// Питбайки и эндуро - 31fd2074-397f-4f39-9b44-cd7a25f4f11e
// Детские квадрики - 31fd2074-397f-4f39-9b44-cd7a65f4f11e
//

export const atvList: Product[] = [
  {
    id: "atv-001",
    categoryId: "0ebe26bf-3790-40ca-bf73-c6edf58ca3fe",

    sku: "УТ-00009388",
    available: 1,

    brand: "Avantis",
    model: "Avantis Veron Max 400 EFI",

    // Объем двигателя
    engineVolume: 400,
    // Мощность двигателя (лс)
    enginePower: 26,
    // Бензин
    fuelType: "Бензин",
    // система подачи топлива
    fuelSystem: "Не указано",
    // охлаждение двигателя
    coolingType: "Жидкостное",
    // тип зажигания
    ignitionType: "EFI",
    // Объем бака
    fuelTankVolume: 9,

    // тип стартера
    starterType: "Не указано",
    // коробка
    transmissionType: "CVT (С понижающей передачей)",

    // чистый вес
    dryWeight: 0,

    images: [
      "https://www.avantsb.ru/upload/resize_cache/iblock/c80/900_675_151b11314a364b80d54ce90229ae6ccd6/075rixl3imo975vc31bstr8h81rcmdi8.jpg",
    ],

    // багажники
    rearTrunk: "Не указано",
    frontTrunk: "Не указано",

    // защита рук
    handProtection: "Есть",
    // задняя передача
    reversGear: "есть",
    // зеркала
    mirrors: "есть",
    // гудок
    horn: "есть",

    // обогрев ручек
    heatedGrips: "Не указано",

    // передняя подвеска
    frontSuspensionType: "Многорычажная независимая на шаровых опорах",
    // задняя подвеска
    rearSuspensionType: "",

    // дорожный просвет
    groundClearance: "Не указано",
    price: 470000,
  },
  {
    id: "atv-002",
    categoryId: "0ebe26bf-3790-40ca-bf73-c6edf58ca3fe",

    sku: "УТ-00008214",
    available: 1,

    brand: "Avantis",
    model: "Квадроцикл Avantis Forester Long 200",

    // Объем двигателя
    engineVolume: 200,
    // Мощность двигателя (лс)
    enginePower: 16,
    // Бензин
    fuelType: "АИ-92",
    // система подачи топлива
    fuelSystem: "Карбюратор",
    // охлаждение двигателя
    coolingType: "Жидкостное",
    // тип зажигания
    ignitionType: "Электронное (C.D.I)",
    // Объем бака
    fuelTankVolume: 9,

    // тип стартера
    starterType: "Не указано",
    // коробка
    transmissionType: "Ременной вариатор с реверсом",

    // чистый вес
    dryWeight: 187,

    images: [
      "https://www.avantsb.ru/upload/resize_cache/iblock/c01/900_675_151b11314a364b80d54ce90229ae6ccd6/dzu08ac9bbv0oh9toubnz5vb78abc2on.png",
    ],

    // багажники
    rearTrunk: "Есть",
    frontTrunk: "Есть",

    // защита рук
    handProtection: "Есть",
    // задняя передача
    reversGear: "Есть",
    // зеркала
    mirrors: "Нет",
    // гудок
    horn: "Есть",

    // обогрев ручек
    heatedGrips: "Нет",

    // передняя подвеска
    frontSuspensionType: "На шаровых опорах с тавотницами",
    // задняя подвеска
    rearSuspensionType: "",

    // дорожный просвет
    groundClearance: "170 мм",
    price: 209450,
  },
  {
    id: "atv-003",
    categoryId: "0ebe26bf-3790-40ca-bf73-c6edf58ca3fe",

    sku: "УТ-00008038",
    available: 1,

    brand: "Avantis",
    model: "Квадроцикл Avantis Hunter 250 BIG NEW",

    // Объем двигателя
    engineVolume: 250,
    // Мощность двигателя (лс)
    enginePower: 19,
    // Бензин
    fuelType: "АИ-92",
    // система подачи топлива
    fuelSystem: "Карбюратор",
    // охлаждение двигателя
    coolingType: "Жидкостное",
    // тип зажигания
    ignitionType: "Электронное (C.D.I)",
    // Объем бака
    fuelTankVolume: 4.7,

    // тип стартера
    starterType: "Не указано",
    // коробка
    transmissionType: "Ременной вариатор с реверсом",

    // чистый вес
    dryWeight: 0,

    images: [
      "https://www.avantsb.ru/upload/resize_cache/iblock/370/900_675_151b11314a364b80d54ce90229ae6ccd6/otx7vh9iv6shvez73hxo4wvi9itiv5mn.jpg",
    ],

    // багажники
    rearTrunk: "Есть",
    frontTrunk: "Есть",

    // защита рук
    handProtection: "Есть",
    // задняя передача
    reversGear: "Есть",
    // зеркала
    mirrors: "Нет",
    // гудок
    horn: "Есть",

    // обогрев ручек
    heatedGrips: "Не указано",

    // передняя подвеска
    frontSuspensionType: "Не указано",
    // задняя подвеска
    rearSuspensionType: "Не указано",

    // дорожный просвет
    groundClearance: "Не указано",
    price: 260800,
  },
  {
    id: "atv-004",
    categoryId: "0ebe26bf-3790-40ca-bf73-c6edf58ca3fe",

    sku: "УТ-00007457",
    available: 1,

    brand: "Avantis",
    model: "Квадроцикл Avantis AURA 200",

    // Объем двигателя
    engineVolume: 200,
    // Мощность двигателя (лс)
    enginePower: 16.5,
    // Бензин
    fuelType: "Бензин",
    // система подачи топлива
    fuelSystem: "Карбюратор",
    // охлаждение двигателя
    coolingType: "Жидкостное",
    // тип зажигания
    ignitionType: "Электронное (C.D.I)",
    // Объем бака
    fuelTankVolume: 5,

    // тип стартера
    starterType: "Не указано",
    // коробка
    transmissionType: "Ременной вариатор с реверсом",

    // чистый вес
    dryWeight: 0,

    images: [
      "https://www.avantsb.ru/upload/resize_cache/iblock/6b5/1024_1024_151b11314a364b80d54ce90229ae6ccd6/l113csneoifjkacqbws6a19k6zlyc910.png",
    ],

    // багажники
    rearTrunk: "Есть",
    frontTrunk: "Есть",

    // защита рук
    handProtection: "Есть",
    // задняя передача
    reversGear: "Есть",
    // зеркала
    mirrors: "Есть",
    // гудок
    horn: "Не указано",

    // обогрев ручек
    heatedGrips: "Не указано",

    // передняя подвеска
    frontSuspensionType: "Не указано",
    // задняя подвеска
    rearSuspensionType: "Не указано",

    // дорожный просвет
    groundClearance: "Не указано",
    price: 99900,
  },
  {
    id: "atv-005",
    categoryId: "0ebe26bf-3790-40ca-bf73-c6edf58ca3fe",

    sku: "УТ-00005090",
    available: 1,

    brand: "Avantis",
    model: "Квадроцикл Avantis Forester Long 200",

    // Объем двигателя
    engineVolume: 200,
    // Мощность двигателя (лс)
    enginePower: 16,
    // Бензин
    fuelType: "АИ-92",
    // система подачи топлива
    fuelSystem: "Карбюратор DENI (ЯПОНИЯ)",
    // охлаждение двигателя
    coolingType: "Жидкостное",
    // тип зажигания
    ignitionType: "Электронное (C.D.I)",
    // Объем бака
    fuelTankVolume: 9,

    // тип стартера
    starterType: "Не указано",
    // коробка
    transmissionType: "Вариатор с реверсом",

    // чистый вес
    dryWeight: 0,

    images: [
      "https://www.avantsb.ru/upload/resize_cache/iblock/f6c/1024_1024_151b11314a364b80d54ce90229ae6ccd6/ulih5mhp1z61yc7raggaojvpctzyqi9r.png",
    ],

    // багажники
    rearTrunk: "Есть",
    frontTrunk: "Есть",

    // защита рук
    handProtection: "Есть",
    // задняя передача
    reversGear: "Есть",
    // зеркала
    mirrors: "Есть",
    // гудок
    horn: "Есть",

    // обогрев ручек
    heatedGrips: "Есть",

    // передняя подвеска
    frontSuspensionType: "Не указано",
    // задняя подвеска
    rearSuspensionType: "Не указано",

    // дорожный просвет
    groundClearance: "Не указано",
    price: 244050,
  },
  {
    id: "atv-006",
    categoryId: "0ebe26bf-3790-40ca-bf73-c6edf58ca3fe",

    sku: "УТ-00005089",
    available: 1,

    brand: "Avantis",
    model: "Квадроцикл Avantis Forester Long 200",

    // Объем двигателя
    engineVolume: 200,
    // Мощность двигателя (лс)
    enginePower: 16,
    // Бензин
    fuelType: "АИ-92",
    // система подачи топлива
    fuelSystem: "Карбюратор DENI (ЯПОНИЯ)",
    // охлаждение двигателя
    coolingType: "Жидкостное",
    // тип зажигания
    ignitionType: "Электронное (C.D.I)",
    // Объем бака
    fuelTankVolume: 9,

    // тип стартера
    starterType: "Не указано",
    // коробка
    transmissionType: "Вариатор с реверсом",

    // чистый вес
    dryWeight: 0,

    images: [
      "https://www.avantsb.ru/upload/resize_cache/iblock/4ab/1024_1024_151b11314a364b80d54ce90229ae6ccd6/3a4gp1p99hm58302ox97tmrdm190c5xs.png",
    ],

    // багажники
    rearTrunk: "Есть",
    frontTrunk: "Есть",

    // защита рук
    handProtection: "Есть",
    // задняя передача
    reversGear: "Есть",
    // зеркала
    mirrors: "Нет",
    // гудок
    horn: "Есть",

    // обогрев ручек
    heatedGrips: "Есть",

    // передняя подвеска
    frontSuspensionType: "Не указано",
    // задняя подвеска
    rearSuspensionType: "Не указано",

    // дорожный просвет
    groundClearance: "Не указано",
    price: 238700,
  },
  {
    id: "atv-007",
    categoryId: "0ebe26bf-3790-40ca-bf73-c6edf58ca3fe",

    sku: "УТ-00006593",
    available: 1,

    brand: "Avantis",
    model: "Квадроцикл Avantis Ray 200",

    // Объем двигателя
    engineVolume: 200,
    // Мощность двигателя (лс)
    enginePower: 16,
    // Бензин
    fuelType: "АИ-92",
    // система подачи топлива
    fuelSystem: "Карбюратор DENI (ЯПОНИЯ)",
    // охлаждение двигателя
    coolingType: "Жидкостное",
    // тип зажигания
    ignitionType: "Электронное (C.D.I)",
    // Объем бака
    fuelTankVolume: 8.5,

    // тип стартера
    starterType: "Не указано",
    // коробка
    transmissionType: "Не указано",

    // чистый вес
    dryWeight: 0,

    images: [
      "https://www.avantsb.ru/upload/resize_cache/iblock/3bc/1024_1024_151b11314a364b80d54ce90229ae6ccd6/6mm63okusp17t8wsjzlicsm3ax3s741y.jpg",
    ],

    // багажники
    rearTrunk: "Не указано",
    frontTrunk: "Не указано",

    // защита рук
    handProtection: "Не указано",
    // задняя передача
    reversGear: "Не указано",
    // зеркала
    mirrors: "Нет",
    // гудок
    horn: "Не указано",

    // обогрев ручек
    heatedGrips: "Не указано",

    // передняя подвеска
    frontSuspensionType: "Пружинная гидравлическая с регулировкой",
    // задняя подвеска
    rearSuspensionType: "Не указано",

    // дорожный просвет
    groundClearance: "Не указано",
    price: 90000,
  },
  {
    id: "atv-008",
    categoryId: "0ebe26bf-3790-40ca-bf73-c6edf58ca3fe",

    sku: "УТ-00007310",
    available: 1,

    brand: "Avantis",
    model: "Квадроцикл Avantis Hunter200 NEW BIG",

    // Объем двигателя
    engineVolume: 200,
    // Мощность двигателя (лс)
    enginePower: 16,
    // Бензин
    fuelType: "АИ-92",
    // система подачи топлива
    fuelSystem: "Карбюратор",
    // охлаждение двигателя
    coolingType: "Не указано",
    // тип зажигания
    ignitionType: "Электронное (C.D.I)",
    // Объем бака
    fuelTankVolume: 9,

    // тип стартера
    starterType: "Не указано",
    // коробка
    transmissionType: "Автоматическая (центробежное сцепление)",

    // чистый вес
    dryWeight: 0,

    images: [
      "https://www.avantsb.ru/upload/resize_cache/iblock/2c9/900_675_151b11314a364b80d54ce90229ae6ccd6/ag6weqtykvhcvc0jk05qajm0nklwyc28.jpg",
    ],

    // багажники
    rearTrunk: "Не указано",
    frontTrunk: "Не указано",

    // защита рук
    handProtection: "Не указано",
    // задняя передача
    reversGear: "Не указано",
    // зеркала
    mirrors: "Есть",
    // гудок
    horn: "Не указано",

    // обогрев ручек
    heatedGrips: "Не указано",

    // передняя подвеска
    frontSuspensionType: "Пружинная гидравлическая с регулировкой",
    // задняя подвеска
    rearSuspensionType: "Не указано",

    // дорожный просвет
    groundClearance: "Не указано",
    price: 255500,
  },
  {
    id: "atv-009",
    categoryId: "0ebe26bf-3790-40ca-bf73-c6edf58ca3fe",

    sku: "УТ-00009239",
    available: 1,

    brand: "Avantis",
    model: "Квадроцикл H250 BIG NEW",

    // Объем двигателя
    engineVolume: 250,
    // Мощность двигателя (лс)
    enginePower: 0,
    // Бензин
    fuelType: "Не указано",
    // система подачи топлива
    fuelSystem: "Не указано",
    // охлаждение двигателя
    coolingType: "Не указано",
    // тип зажигания
    ignitionType: "Не указано",
    // Объем бака
    fuelTankVolume: 0,

    // тип стартера
    starterType: "Не указано",
    // коробка
    transmissionType: "Не указано",

    // чистый вес
    dryWeight: 0,

    images: [
      "https://www.avantsb.ru/upload/resize_cache/iblock/2e4/900_675_151b11314a364b80d54ce90229ae6ccd6/tkja7k20ngv6ifzrzfetitxiw3q1xqo6.jpg",
    ],

    // багажники
    rearTrunk: "Не указано",
    frontTrunk: "Не указано",

    // защита рук
    handProtection: "Не указано",
    // задняя передача
    reversGear: "Не указано",
    // зеркала
    mirrors: "Не указано",
    // гудок
    horn: "Не указано",

    // обогрев ручек
    heatedGrips: "Не указано",

    // передняя подвеска
    frontSuspensionType: "Не указано",
    // задняя подвеска
    rearSuspensionType: "Не указано",

    // дорожный просвет
    groundClearance: "Не указано",
    price: 278600,
  },
  {
    id: "atv-010",
    categoryId: "0ebe26bf-3790-40ca-bf73-c6edf58ca3fe",

    sku: "УТ-00006530",
    available: 1,

    brand: "Avantis",
    model: "Квадроцикл R-moto Lion 200Х",

    // Объем двигателя
    engineVolume: 200,
    // Мощность двигателя (лс)
    enginePower: 17,
    // Бензин
    fuelType: "АИ-92",
    // система подачи топлива
    fuelSystem: "Карбюратор DENI (ЯПОНИЯ)",
    // охлаждение двигателя
    coolingType: "Воздушное",
    // тип зажигания
    ignitionType: "Электронное (C.D.I)",
    // Объем бака
    fuelTankVolume: 6.5,

    // тип стартера
    starterType: "Не указано",
    // коробка
    transmissionType: "Вариатор F-N-R",

    // чистый вес
    dryWeight: 0,

    images: [
      "https://www.avantsb.ru/upload/resize_cache/iblock/660/1024_1024_151b11314a364b80d54ce90229ae6ccd6/ownw8axbhc8o3h4mh0slzogd4s3g7tes.png",
    ],

    // багажники
    rearTrunk: "Есть",
    frontTrunk: "Есть",

    // защита рук
    handProtection: "Есть",
    // задняя передача
    reversGear: "Нет",
    // зеркала
    mirrors: "Есть",
    // гудок
    horn: "Не указано",

    // обогрев ручек
    heatedGrips: "Не указано",

    // передняя подвеска
    frontSuspensionType: "2-х рычажная, шаровая с 2-мя амортизаторами",
    // задняя подвеска
    rearSuspensionType: "Не указано",

    // дорожный просвет
    groundClearance: "Не указано",
    price: 209990,
  },
  {
    id: "atv-011",
    categoryId: "0ebe26bf-3790-40ca-bf73-c6edf58ca3fe",

    sku: "УТ-00004898",
    available: 1,

    brand: "Avantis",
    model: "Квадроцикл WELS Thunder Trail 200",

    // Объем двигателя
    engineVolume: 200,
    // Мощность двигателя (лс)
    enginePower: 16.5,
    // Бензин
    fuelType: "Бензин",
    // система подачи топлива
    fuelSystem: "Карбюратор DENI (ЯПОНИЯ)",
    // охлаждение двигателя
    coolingType: "Жидкостное",
    // тип зажигания
    ignitionType: "Электронное (C.D.I)",
    // Объем бака
    fuelTankVolume: 6.5,

    // тип стартера
    starterType: "Не указано",
    // коробка
    transmissionType: "Вариатор",

    // чистый вес
    dryWeight: 175,

    images: [
      "https://www.avantsb.ru/upload/resize_cache/iblock/6b2/872_617_151b11314a364b80d54ce90229ae6ccd6/r78msw3q6c61oxxh9pdn253hblq7wamf.jpg",
    ],

    // багажники
    rearTrunk: "Не указано",
    frontTrunk: "Не указано",

    // защита рук
    handProtection: "Не указано",
    // задняя передача
    reversGear: "Нет",
    // зеркала
    mirrors: "Есть",
    // гудок
    horn: "Не указано",

    // обогрев ручек
    heatedGrips: "Есть",

    // передняя подвеска
    frontSuspensionType:
      "Независимая 2-х рычажная, на шаровых опорах с 2-я амортизаторами",
    // задняя подвеска
    rearSuspensionType: "Не указано",

    // дорожный просвет
    groundClearance: "Не указано",
    price: 266990,
  },
  {
    id: "atv-012",
    categoryId: "0ebe26bf-3790-40ca-bf73-c6edf58ca3fe",

    sku: "УТ-00000712",
    available: 1,

    brand: "Avantis",
    model: "Квадроцикл R-moto Lion 200LD",

    // Объем двигателя
    engineVolume: 200,
    // Мощность двигателя (лс)
    enginePower: 17,
    // Бензин
    fuelType: "АИ-92",
    // система подачи топлива
    fuelSystem: "Карбюратор DENI (ЯПОНИЯ)",
    // охлаждение двигателя
    coolingType: "Воздушное",
    // тип зажигания
    ignitionType: "Электронное (C.D.I)",
    // Объем бака
    fuelTankVolume: 0,

    // тип стартера
    starterType: "Не указано",
    // коробка
    transmissionType: "Вариатор",

    // чистый вес
    dryWeight: 160,

    images: [
      "https://www.avantsb.ru/upload/resize_cache/iblock/0d6/1024_1024_151b11314a364b80d54ce90229ae6ccd6/t9nmcc1bms1f5sjvncqgxk52pbsjntht.png",
    ],

    // багажники
    rearTrunk: "Есть",
    frontTrunk: "Есть",

    // защита рук
    handProtection: "Есть",
    // задняя передача
    reversGear: "Нет",
    // зеркала
    mirrors: "Есть",
    // гудок
    horn: "Не указано",

    // обогрев ручек
    heatedGrips: "Не указано",

    // передняя подвеска
    frontSuspensionType: "2-х рычажная, шаровая с 2-мя амортизаторами",
    // задняя подвеска
    rearSuspensionType: "Не указано",

    // дорожный просвет
    groundClearance: "Не указано",
    price: 99990,
  },
  {
    id: "atv-013",
    categoryId: "31fd2074-397f-4f39-9b44-cd7a65f4f11e",

    sku: "УТ-00001566",
    available: 1,

    brand: "Avantis",
    model: "Детский квадроцикл ATV Classic mini 4T",

    // Объем двигателя
    engineVolume: 50,
    // Мощность двигателя (лс)
    enginePower: 3.4,
    // Бензин
    fuelType: "АИ-92",
    // система подачи топлива
    fuelSystem: "Карбюратор DENI (ЯПОНИЯ)",
    // охлаждение двигателя
    coolingType: "Воздушное",
    // тип зажигания
    ignitionType: "Электронное (C.D.I)",
    // Объем бака
    fuelTankVolume: 2.5,

    // тип стартера
    starterType: "Не указано",
    // коробка
    transmissionType: "Автоматическое центробежное сцепление без реверса",

    // чистый вес
    dryWeight: 48,

    images: [
      "https://www.avantsb.ru/upload/resize_cache/iblock/dde/1024_1024_151b11314a364b80d54ce90229ae6ccd6/1mk8o335a8zqjj9izffusa4ntskrpllb.jpeg",
    ],

    // багажники
    rearTrunk: "Есть",
    frontTrunk: "Есть",

    // защита рук
    handProtection: "Не указано",
    // задняя передача
    reversGear: "Нет",
    // зеркала
    mirrors: "Нет",
    // гудок
    horn: "Не указано",

    // обогрев ручек
    heatedGrips: "Не указано",

    // передняя подвеска
    frontSuspensionType: "2-х рычажная, шаровая с 2-мя амортизаторами",
    // задняя подвеска
    rearSuspensionType: "Не указано",

    // дорожный просвет
    groundClearance: "120 мм",
    price: 64900,
  },
  {
    id: "atv-014",
    categoryId: "31fd2074-397f-4f39-9b44-cd7a65f4f11e",

    sku: "00000035372",
    available: 1,

    brand: "Avantis",
    model: "Квадроцикл Yacota 45",

    // Объем двигателя
    engineVolume: 45,
    // Мощность двигателя (лс)
    enginePower: 2.5,
    // Бензин
    fuelType: "АИ-92",
    // система подачи топлива
    fuelSystem: "Карбюратор DENI (ЯПОНИЯ)",
    // охлаждение двигателя
    coolingType: "Воздушное",
    // тип зажигания
    ignitionType: "Электронное (C.D.I)",
    // Объем бака
    fuelTankVolume: 1,

    // тип стартера
    starterType: "Не указано",
    // коробка
    transmissionType: "Автоматическая (центробежное сцепление)",

    // чистый вес
    dryWeight: 0,

    images: [
      "https://www.avantsb.ru/upload/resize_cache/iblock/31a/800_600_151b11314a364b80d54ce90229ae6ccd6/b40fugsj6svfq57zt110cr872uygomq4.jpg",
    ],

    // багажники
    rearTrunk: "Не указано",
    frontTrunk: "Не указано",

    // защита рук
    handProtection: "Не указано",
    // задняя передача
    reversGear: "Не указано",
    // зеркала
    mirrors: "Нет",
    // гудок
    horn: "Не указано",

    // обогрев ручек
    heatedGrips: "Не указано",

    // передняя подвеска
    frontSuspensionType: "Рычажная",
    // задняя подвеска
    rearSuspensionType: "Не указано",

    // дорожный просвет
    groundClearance: "Не указано",
    price: 58600,
  },
];
