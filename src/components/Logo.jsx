import Link from 'next/link';
import { useThemeContext } from '@/context/themeContext';

function Logo(props) {


    const { themeLayout, setThemeLayout } = useThemeContext();


    const {
        url,
        alt,
        logoTitle,
        theme
    } = props;




    return (
        props &&   <Link title="Chuchoter Logo" aria-label="Chuchoter Logo" className='block' href="/"  onClick={(e)=> setThemeLayout('black')}>
        {/* <img src={url} alt={alt} title={logoTitle} className="logo block w-full" /> */}
        <svg xmlns="http://www.w3.org/2000/svg" className='logo sm:h-[60px] h-[50px]' fill="none" viewBox="0 0 130 61">
            <path fill={theme} d="M28.292 51.125a4.769 4.769 0 0 1 .956-1.563 7.951 7.951 0 0 1 1.404-1.18 5.769 5.769 0 0 1 1.499-.733c.106-.043.223-.075.35-.096.128-.042.256-.063.383-.063.128-.022.245-.043.351-.064h.383l1.658-.064v1.435H34c-.744.085-1.392.255-1.945.51a3.996 3.996 0 0 0-1.435 1.053 4.824 4.824 0 0 0-.83 1.371 3.837 3.837 0 0 0-.287 1.467c0 .107.011.234.032.383 0 .128.022.276.064.447.021.085.032.17.032.255.021.085.053.16.096.223.021.106.042.191.064.255l.127.255c.128.32.308.606.542.861a4.7 4.7 0 0 0 .798.798c.319.255.701.446 1.148.574.468.127 1 .191 1.595.191l1.275-.064v1.436h-2.04c-.851-.022-1.596-.17-2.233-.447a4.92 4.92 0 0 1-1.69-1.244 6.144 6.144 0 0 1-1.021-1.818 6.828 6.828 0 0 1-.351-2.232v-.032c0-.68.117-1.318.35-1.914Zm10.429-3.763v4.242l.51-.32c.149-.084.319-.17.51-.254a1.72 1.72 0 0 1 .542-.224c.192-.042.404-.063.638-.063.404 0 .798.063 1.18.19.362.129.691.31.99.543.297.234.52.521.669.861.17.32.255.691.255 1.116v5.359H42.58v-4.625c0-.298-.043-.574-.128-.83a1.602 1.602 0 0 0-.382-.637 2.196 2.196 0 0 0-.575-.415 1.872 1.872 0 0 0-.701-.127c-.298 0-.564.042-.797.127a1.543 1.543 0 0 0-.575.351 2.7 2.7 0 0 0-.382.479c-.085.191-.16.372-.224.542a.58.58 0 0 1-.032.191.526.526 0 0 0-.031.16.527.527 0 0 0-.032.16v4.624h-1.404v-11.45h1.404Zm9.217 3.604v4.752c0 .319.053.595.16.83.084.233.212.435.382.605.17.191.372.33.606.415.234.085.5.127.797.127.213 0 .426-.042.638-.127a1.15 1.15 0 0 0 .51-.351c.15-.17.266-.34.352-.51.106-.192.18-.383.223-.574 0-.043.01-.086.032-.128 0-.043.01-.085.032-.128v-4.911h1.435v4.784c0 .468-.075.893-.223 1.276a3.193 3.193 0 0 1-.67 1.084 2.732 2.732 0 0 1-1.02.733 3.586 3.586 0 0 1-1.309.224c-.489 0-.935-.064-1.34-.192a3.412 3.412 0 0 1-1.051-.605 2.922 2.922 0 0 1-.734-1.117c-.149-.468-.223-1.02-.223-1.658v-4.53h1.403Zm7.686 3.7c.022-.107.043-.224.064-.351.021-.107.053-.224.096-.351l.127-.383a3.73 3.73 0 0 1 .51-.893c.213-.276.458-.532.734-.765a3.018 3.018 0 0 1 1.02-.574 4.127 4.127 0 0 1 1.308-.192l1.531-.032v1.404h-1.148a.934.934 0 0 1-.223.031c-.085 0-.17.011-.255.032l-.255.064-.256.064a3.61 3.61 0 0 0-.574.287 2.17 2.17 0 0 0-.51.478c-.17.17-.298.383-.383.638a2.716 2.716 0 0 0-.127.861v.192c0 .021.01.053.032.096v.191a.246.246 0 0 1 .032.096c0 .042.01.085.031.127.022.021.032.053.032.096.064.212.15.414.256.606.127.17.276.35.446.542.17.17.383.298.638.383.255.063.553.106.893.127h.223l1.148-.064v1.436h-1.658a4.892 4.892 0 0 1-1.34-.224 2.691 2.691 0 0 1-.988-.574 3.945 3.945 0 0 1-.702-.765 3.69 3.69 0 0 1-.447-.861 6.29 6.29 0 0 1-.127-.351l-.064-.383-.064-.319v-.67Zm8.835-7.304v4.242l.51-.32c.149-.084.319-.17.51-.254.17-.107.351-.181.543-.224.191-.042.404-.063.637-.063.404 0 .798.063 1.18.19.362.129.692.31.99.543.297.234.53.521.7.861.15.32.224.691.224 1.116v5.359h-1.435v-4.625c0-.298-.043-.574-.128-.83a1.602 1.602 0 0 0-.382-.637 2.196 2.196 0 0 0-.574-.415 1.873 1.873 0 0 0-.702-.127c-.298 0-.564.042-.797.127a1.543 1.543 0 0 0-.575.351 2.7 2.7 0 0 0-.382.479c-.085.191-.16.372-.224.542 0 .064-.01.127-.031.191a.523.523 0 0 0-.032.16.524.524 0 0 0-.032.16v4.624h-1.404v-11.45h1.404Zm18.211 1.69h1.53v1.914h2.967v1.403h-2.966v3.987c0 .149.01.287.032.414.021.128.053.245.096.351.042.107.138.181.287.223.148.064.35.086.606.064l1.817-.032v1.436h-2.168a2.64 2.64 0 0 1-.957-.16 1.55 1.55 0 0 1-.67-.478 2.585 2.585 0 0 1-.383-.766 2.574 2.574 0 0 1-.191-.797v-7.559Zm10.11-1.307h1.818l-2.169 2.328h-1.18l1.531-2.328Zm1.436 5.262c-.022 0-.043-.01-.064-.032l-.064-.064a.208.208 0 0 0-.096-.095.207.207 0 0 0-.096-.096.37.37 0 0 0-.095-.064 41.97 41.97 0 0 1-.096-.096.497.497 0 0 1-.127-.095 1.237 1.237 0 0 0-.16-.064 1.668 1.668 0 0 0-.383-.096 3.381 3.381 0 0 0-.478-.032c-.425 0-.808.075-1.148.224a2.017 2.017 0 0 0-.797.67 2.944 2.944 0 0 0-.479.924c-.106.32-.16.66-.16 1.021v.032c0 .319.054.617.16.893.106.298.276.574.51.83.213.276.479.477.798.605.319.128.69.191 1.116.191.425 0 .797-.053 1.116-.159.298-.106.521-.266.67-.478a4.29 4.29 0 0 0 .415-.766c.127-.276.234-.606.319-.988l.032-.032 1.403.063v.064c0 .021.01.032.032.032v.542a5.183 5.183 0 0 0-.064.287c0 .043-.01.085-.032.128a.527.527 0 0 0-.032.16 1.221 1.221 0 0 1-.064.159 1.254 1.254 0 0 0-.064.16 3.606 3.606 0 0 1-.51.797c-.212.255-.478.5-.797.733-.319.234-.68.404-1.084.51a5.26 5.26 0 0 1-1.34.16 4.926 4.926 0 0 1-1.627-.255 4.022 4.022 0 0 1-1.307-.83 3.663 3.663 0 0 1-.893-1.275 4.091 4.091 0 0 1-.287-1.563c0-.617.074-1.159.223-1.627.17-.467.415-.871.734-1.212.34-.34.69-.616 1.052-.829.34-.212.712-.372 1.116-.478.043 0 .085-.01.128-.032h.127c.043 0 .075-.01.096-.032h.128a1.06 1.06 0 0 1 .255-.032h.255c.425 0 .84.053 1.244.16.383.127.733.319 1.052.574.32.255.606.531.862.829.255.319.478.648.67.989l-5.39 2.902-.639-1.116 3.86-2.201Zm6.027-2.073v.765c.022 0 .032-.01.032-.032l.096-.095a.396.396 0 0 0 .064-.096l.095-.096c.085-.085.181-.17.287-.255.107-.063.234-.127.383-.191.128-.064.277-.117.447-.16.148-.042.319-.063.51-.063l.51-.032v1.403h-.382a3.23 3.23 0 0 0-.766.255 1.664 1.664 0 0 0-.574.415c-.128.17-.245.34-.351.51-.085.17-.159.351-.223.542a3.621 3.621 0 0 0-.096.415 2.353 2.353 0 0 0-.032.383v4.178h-1.435v-7.846h1.435Zm-26.663 3.54v-.032c0-.042.011-.085.032-.127 0-.064.01-.117.032-.16.043-.234.117-.478.223-.733.107-.234.255-.457.447-.67.191-.213.425-.372.702-.479a3.51 3.51 0 0 1 1.02-.127c.404 0 .766.053 1.085.16.319.127.595.308.829.542.212.233.372.5.478.797.096.255.128.542.16.83h1.53c-.031-.511-.095-.958-.255-1.372a3.084 3.084 0 0 0-.829-1.212 4.915 4.915 0 0 0-1.148-.766 4.04 4.04 0 0 0-1.244-.382h-.383c-.042 0-.074-.011-.095-.032h-.128c-.51 0-1 .085-1.467.255a4.527 4.527 0 0 0-1.308.83 3.73 3.73 0 0 0-.924 1.243c-.192.446-.256.925-.288 1.435h1.531Zm4.976.67c-.032.35-.064.67-.16.925-.127.383-.319.67-.574.86-.234.192-.51.341-.829.447a3.467 3.467 0 0 1-.957.128c-.383 0-.712-.042-.989-.128a1.85 1.85 0 0 1-.67-.478 3.421 3.421 0 0 1-.446-.638 4.66 4.66 0 0 1-.255-.701.94.94 0 0 1-.032-.224.603.603 0 0 1-.032-.191H72.05c.032.383.096.797.224 1.148.17.51.425.968.765 1.371.34.426.776.734 1.308.925.553.213 1.19.32 1.913.32.532 0 1.01-.075 1.436-.224.425-.17.786-.404 1.084-.702.319-.319.574-.659.765-1.02a3.41 3.41 0 0 0 .447-1.117l.064-.255a1.06 1.06 0 0 0 .032-.255c0-.042.01-.085.031-.127v-.064h-1.562Zm-59.514-43.12c-1.754 0-3.189-1.372-3.189-3.094 0-1.722 1.435-3.125 3.19-3.125 1.785 0 3.22 1.403 3.22 3.125s-1.435 3.094-3.22 3.094Zm-8.26 0c-1.786 0-3.19-1.372-3.19-3.094 0-1.722 1.404-3.125 3.19-3.125s3.221 1.403 3.221 3.125-1.435 3.094-3.221 3.094Zm-3.03 9.472c-2.041.638-1.945 2.137-2.041 6.347l-.032 2.998c0 1.403.478 1.914 1.595 1.914h15.404c.67 0 1.02-.51 1.02-1.914V14.129c0-.191.065-.32.32-.32h6.315c.255 0 .319 0 .319.256v1.69c0 .224-.064.383-.32.383h-.7c-.224 0-.288.128-.288.447V30.84c0 2.966-1.914 5.04-4.529 5.04H4.595c-2.647 0-4.561-2.36-4.561-5.518-.35-6.156 2.01-10.11 7.622-10.78l.096 1.913Z" />
            <path fill={theme} fillRule="evenodd" d="M47.3 36.965c0 .701-.542 5.932-7.686 5.932 0 0-1.276 0-2.265-.702v-2.073c.67.35 1.5.478 2.073.478 1.053 0 2.265-.86 2.265-2.583v-2.073h-2.36c-3.796 0-6.347-3.54-6.347-10.748 0-6.028 1.084-11.354 6.506-11.354h8.803c.223 0 .319 0 .319.287v1.658c0 .255-.096.383-.32.383h-.733c-.223 0-.255.128-.255.446v16.17h9.026V14.161c0-.192.064-.32.319-.32h6.315c.223 0 .319 0 .319.288v1.658c0 .255-.096.383-.32.383h-.7c-.256 0-.288.128-.288.446v14.672c0 .956.766 1.817 1.69 1.817.702 0 1.021-.542 1.021-1.817V14.16c0-.192.064-.32.319-.32h6.315c.255 0 .319 0 .319.288v1.658c0 .255-.064.383-.32.383h-.7c-.224 0-.288.128-.288.446v14.672c0 .956.766 1.817 1.69 1.817.734 0 1.053-.574 1.053-1.817V14.16c0-.192.032-.32.319-.32h6.315c.223 0 .319 0 .319.288v1.658c0 .255-.096.383-.32.383h-.733c-.223 0-.287.128-.287.446v14.608c.096.86.957 1.562 1.786 1.562h10.302l-.032-18.625c0-.192.032-.32.319-.32h6.315c.223 0 .319 0 .319.288v1.658c0 .255-.096.383-.32.383h-.733c-.223 0-.255.128-.255.446v14.448c0 .925.893 1.722 1.754 1.722h8.197V14.161c0-.192.032-.32.319-.32h6.315c.223 0 .319 0 .319.288v1.658c0 .255-.096.383-.319.383h-.734c-.223 0-.287.128-.287.446v14.672c0 .956.798 1.817 1.691 1.817.733 0 1.052-.542 1.052-1.817V14.16c0-.192.032-.32.319-.32h6.315c.223 0 .319 0 .319.288v1.658c0 .255-.096.383-.319.383h-.734c-.223 0-.255.128-.255.446v14.672c0 .956.766 1.817 1.659 1.817.733 0 1.052-.574 1.052-1.817V14.16c0-.192.064-.32.319-.32h6.315c.223 0 .319 0 .319.288v1.658c0 .255-.096.383-.319.383h-.733c-.224 0-.256.128-.256.446v14.512c0 3.126-1.786 5.135-4.592 5.135-1.563 0-2.424-.415-3.955-1.818l-.447-.478c-.925 1.499-2.296 2.328-4.018 2.328-1.404 0-2.36-.447-3.891-1.85l-.287 1.499H100.18c-1.531 0-2.903-.702-3.796-2.041l-.383 2.041h-13.49c-1.786 0-3.317-.957-4.178-2.615-.638 1.818-2.137 2.934-4.242 2.934-1.531 0-2.392-.415-3.955-1.818l-.447-.478c-.893 1.499-2.264 2.328-3.986 2.328-1.404 0-2.36-.447-3.923-1.85l-.255 1.499H47.3v1.02Zm-5.613-4.179V19.04c0-1.722-.542-2.679-1.435-2.679-1.244 0-1.69 1.18-1.723 4.274v7.91c.032 3.093.574 4.241 1.818 4.241h1.34Zm29.629-20.922c-1.754 0-3.19-1.371-3.19-3.093 0-1.723 1.436-3.126 3.19-3.126 1.786 0 3.221 1.403 3.221 3.126 0 1.722-1.435 3.093-3.221 3.093Zm-3.86-6.41c-1.562 0-2.838-1.212-2.838-2.711C64.618 1.212 65.894 0 67.457 0c1.53 0 2.806 1.212 2.806 2.743 0 1.499-1.275 2.71-2.806 2.71Zm-3.699 6.41c-1.786 0-3.221-1.371-3.221-3.093 0-1.723 1.435-3.126 3.221-3.126 1.754 0 3.19 1.403 3.19 3.126 0 1.722-1.436 3.093-3.19 3.093Zm29.374 32.18c-1.754 0-3.19-1.402-3.19-3.125 0-1.722 1.436-3.093 3.19-3.093 1.786 0 3.221 1.371 3.221 3.093 0 1.723-1.435 3.126-3.22 3.126Zm-7.559 0c-1.786 0-3.22-1.402-3.22-3.125 0-1.722 1.434-3.093 3.22-3.093 1.754 0 3.19 1.371 3.19 3.093 0 1.723-1.436 3.126-3.19 3.126Zm35.753-32.18c-1.786 0-3.189-1.371-3.189-3.093 0-1.723 1.403-3.126 3.189-3.126s3.189 1.403 3.189 3.126c0 1.722-1.403 3.093-3.189 3.093Zm-3.891-6.41c-1.563 0-2.807-1.212-2.807-2.711 0-1.531 1.244-2.743 2.807-2.743s2.807 1.212 2.807 2.743c0 1.499-1.244 2.71-2.807 2.71Zm-3.7 6.41c-1.786 0-3.189-1.371-3.189-3.093 0-1.723 1.403-3.126 3.189-3.126s3.19 1.403 3.19 3.126c0 1.722-1.404 3.093-3.19 3.093Zm12.885 40.409c-.191.096-.574.128-1.052.128-.479 0-1.116-.064-1.754-.128 1.116.67 2.073 1.34 2.328 1.723.351.606.478 1.307.319 1.977-.128.702-.542 1.276-1.148 1.659a2.518 2.518 0 0 1-.957.382c.032.51-.223 1.02-.702 1.308-.446.287-1.02.319-1.467.064a3.324 3.324 0 0 1-.765.733 2.679 2.679 0 0 1-1.404.415c-.191 0-.382-.021-.574-.064-.67-.16-1.276-.574-1.626-1.148-.096-.128-.192-.447-.287-.797-.064.35-.128.638-.224.797a2.703 2.703 0 0 1-1.594 1.244 2.658 2.658 0 0 1-.702.095 2.56 2.56 0 0 1-1.276-.35c-.319-.16-.574-.415-.797-.67a1.563 1.563 0 0 1-1.499 0c-.478-.287-.734-.766-.765-1.308a2.13 2.13 0 0 1-.957-.319 2.59 2.59 0 0 1-.989-3.572c.191-.319 1.084-1.084 2.264-1.85-.861.128-1.69.224-2.264.224-.287 0-.542-.032-.67-.064-1.371-.447-2.137-1.914-1.722-3.317a2.69 2.69 0 0 1 .51-.893c-.351-.383-.478-.925-.319-1.467a1.42 1.42 0 0 1 1.117-.989c-.032-.35 0-.701.095-1.052.224-.67.67-1.212 1.308-1.531a2.506 2.506 0 0 1 1.977-.16c.447.128 1.372.893 2.329 1.818-.702-1.244-1.149-2.392-1.149-2.775-.031-1.435 1.117-2.647 2.552-2.679.351 0 .702.064 1.02.192a1.522 1.522 0 0 1 1.276-.797c.542 0 1.021.255 1.308.701.319-.127.67-.191 1.02-.223a2.634 2.634 0 0 1 2.68 2.583c0 .415-.351 1.467-.894 2.616.83-.894 1.627-1.595 2.01-1.755 1.371-.478 2.87.192 3.381 1.563.127.32.159.67.159 1.02.51.065.957.447 1.148.958.191.51.096 1.052-.255 1.467.255.255.446.542.574.86.478 1.372-.191 2.871-1.563 3.381Zm-4.242-.063c-.223-.096-.414-.192-.606-.287a5.034 5.034 0 0 1-.765-.192c-.319.67-.765 1.244-1.371 1.659l.223-.16 1.913 2.743-.542.351-1.881-2.711.223-.16a4.463 4.463 0 0 1-1.818.67v1.34c.064 1.594.319 3.125.574 3.508a1.9 1.9 0 0 0 1.276.861c.51.128 1.052.032 1.499-.255.287-.191.542-.446.701-.765l.16-.351.319.255a.915.915 0 0 0 1.052.096c.319-.224.479-.606.351-.99l-.096-.414h.383c.383 0 .702-.127 1.021-.319.446-.287.765-.733.861-1.243a1.918 1.918 0 0 0-.255-1.5c-.192-.318-1.563-1.307-3.222-2.136Zm-2.742 1.18-.064.063.064-.063Zm-.351-3.253a1.953 1.953 0 0 0-1.946-1.946c-1.084 0-1.977.861-1.977 1.946 0 1.084.893 1.945 1.977 1.945a1.953 1.953 0 0 0 1.946-1.945Zm-2.137 5.103a.359.359 0 0 1-.032-.16c0-.34-.011-.659-.032-.957a3.763 3.763 0 0 1-1.882-.606l.256.16-1.786 2.806-.543-.319 1.786-2.806.256.16a3.923 3.923 0 0 1-1.436-1.627c-.255.085-.499.16-.733.223-1.722.861-3.445 2.137-3.732 2.647a2.01 2.01 0 0 0 .734 2.711c.319.16.67.287 1.02.255h.415l-.096.383a.88.88 0 0 0 .415.989.872.872 0 0 0 1.052-.16l.287-.255.192.35c.191.288.446.543.733.734.957.543 2.169.192 2.743-.765.16-.319.415-1.914.383-3.763Zm-1.977-1.723h.031-.031Zm-3.094-1.786.701-.191c.234-.106.458-.213.67-.319a5.033 5.033 0 0 1-.159-.989c0-.255.021-.51.064-.765l-3.254-.734.16-.606 3.253.734a3.82 3.82 0 0 1 .925-1.5 21.533 21.533 0 0 0-.702-.86c-1.244-1.372-2.551-2.424-2.902-2.552-.51-.16-1.052-.095-1.531.128-.446.255-.797.67-.957 1.18-.127.319-.127.702-.063 1.052l.095.383h-.414c-.383 0-.734.223-.83.606-.127.35 0 .765.319.989l.351.223-.287.255a1.808 1.808 0 0 0-.574.893 1.967 1.967 0 0 0 1.276 2.488c.382.127 2.041 0 3.859-.415Zm3.03-4.911a3.758 3.758 0 0 1 1.786-.638l-.064-3.349.606-.032.096 3.349a4.027 4.027 0 0 1 1.818.542c.191-.298.393-.617.606-.957.893-1.626 1.467-3.189 1.467-3.572-.032-1.084-.925-1.977-2.042-1.945-.35.032-.701.127-.988.319l-.351.223-.128-.383a.918.918 0 0 0-.861-.638c-.382.032-.733.287-.829.67l-.096.383-.351-.192a2.041 2.041 0 0 0-.956-.255h-.064c-1.084.032-1.977.957-1.946 2.041.032.606 1.085 2.807 2.297 4.434Zm12.47 2.328a2.107 2.107 0 0 0-.606-.861l-.319-.255.319-.224a.907.907 0 0 0 .287-1.02.876.876 0 0 0-.893-.574l-.383.032.064-.383a1.966 1.966 0 0 0-.095-1.053c-.383-1.02-1.531-1.562-2.552-1.18-.351.128-1.595 1.244-2.775 2.711-.234.298-.436.574-.606.83.415.382.734.86.989 1.403l3.221-.925.16.606-3.19.925c.064.276.107.563.128.86 0 .341-.032.67-.096.99l.766.319c.17.042.351.085.542.127 1.85.32 3.508.351 3.859.223 1.021-.382 1.563-1.53 1.18-2.551Z" clipRule="evenodd" />
        </svg>
 </Link>
    );
}

export default Logo;