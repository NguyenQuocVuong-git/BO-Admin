import { ref, onMounted } from 'vue';

const useDropdown = () => {
  const dropdownRef = ref(null);
  const dropdownOpen = ref(false);

  const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
  };

  const closeDropdown = () => {
    dropdownOpen.value = false;
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
      closeDropdown();
    }
  };

  onMounted(() => {
    window.addEventListener('click', handleClickOutside);
  });

  return {
    dropdownRef,
    dropdownOpen,
    toggleDropdown,
  };
};

export default useDropdown;
