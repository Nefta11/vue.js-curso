import { useWeatherStore } from "@/stores/weatherStore";
import { getTemperatura } from "@/helpers/getWather";

export const useWeather = async () => {
  const temperatura = await getTemperatura();
  const weatherStore = useWeatherStore();
  weatherStore.setTemperatura(temperatura);

}
