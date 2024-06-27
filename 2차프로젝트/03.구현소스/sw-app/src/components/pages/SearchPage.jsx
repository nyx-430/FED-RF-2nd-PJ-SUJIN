import React from 'react';

// 라우터 전달변수값을 받기 위해 useLocation을 불러옴
import { useLocation } from 'react-router-dom';

// 검색 모듈 불러오기
import Searching from '../modules/Searching';

function SearchPage() {
    // 라우터 전달값 받기 객체 생성
    const loc = useLocation();

    // 넘어온 키워드 받기 //////
    let keyword = loc.state.keyword;

    console.log("검색어:", keyword);

    // 코드 리턴구역 ///////////////
    return (
        <>
            <section id="search-page" className="page">
                <h1 className='big-title'>
                    Search Result
                </h1>
                <hr />
                <Searching kword={keyword} />
            </section>
        </>
    );
}

export default SearchPage;