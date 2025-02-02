<button {{ $attributes->merge(['type' => 'submit', 'class' => 'inline-flex items-center px-4 py-2 bg-blue-300 dark:bg-blue-200 border border-transparent rounded-md font-semibold text-xs text-black dark:text-gray-800 uppercase tracking-widest hover:bg-gray-300 dark:hover:bg-blue focus:bg-gray-100 dark:focus:bg-blue active:bg-gray-900 dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150']) }}>
    {{ $slot }}
</button>
