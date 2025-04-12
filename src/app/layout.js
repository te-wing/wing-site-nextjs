import "./globals.css";
import Link from 'next/link';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <header>
          <svg height="111" viewBox="380 400 1000 800" xmlns="http://www.w3.org/2000/svg">
            <path d="M 1191,521 L 1190,522 L 1187,522 L 1186,523 L 1185,523 L 1183,525 L 1182,525 L 1180,527 L 1178,527 L 1176,529 L 1175,529 L 1174,530 L 1173,530 L 1172,531 L 1171,531 L 1169,533 L 1168,533 L 1166,535 L 1164,535 L 1164,536 L 1163,537 L 1162,537 L 1161,538 L 1160,538 L 1159,539 L 1158,539 L 1158,540 L 1157,541 L 1156,541 L 1155,542 L 1154,542 L 1152,544 L 1151,544 L 1149,546 L 1147,546 L 1147,547 L 1146,548 L 1144,548 L 1143,549 L 1142,549 L 1142,550 L 1140,552 L 1138,552 L 1138,553 L 1137,554 L 1135,554 L 1133,556 L 1132,556 L 1131,557 L 1130,557 L 1128,559 L 1126,559 L 1126,560 L 1125,561 L 1124,561 L 1123,562 L 1121,562 L 1118,565 L 1117,565 L 1115,567 L 1113,567 L 1112,568 L 1111,568 L 1108,571 L 1106,571 L 1106,572 L 1105,573 L 1104,572 L 1103,573 L 1102,572 L 1101,572 L 1100,573 L 1099,573 L 1098,572 L 1098,571 L 1101,568 L 1102,568 L 1103,567 L 1103,566 L 1104,565 L 1105,565 L 1108,562 L 1108,561 L 1109,560 L 1109,559 L 1113,555 L 1113,554 L 1114,553 L 1114,551 L 1115,550 L 1115,549 L 1114,549 L 1112,547 L 1108,547 L 1106,549 L 1105,549 L 1104,550 L 1102,550 L 1102,551 L 1101,552 L 1100,552 L 1096,556 L 1094,556 L 1091,559 L 1090,559 L 1089,560 L 1088,560 L 1088,561 L 1087,562 L 1086,562 L 1084,564 L 1083,564 L 1083,565 L 1082,566 L 1081,566 L 1078,569 L 1077,569 L 1076,570 L 1075,570 L 1068,577 L 1067,577 L 1064,580 L 1063,580 L 1059,584 L 1058,584 L 1058,585 L 1057,586 L 1056,586 L 1054,588 L 1053,588 L 1051,590 L 1050,590 L 1047,593 L 1046,593 L 1042,597 L 1041,597 L 1040,598 L 1039,598 L 1038,599 L 1037,599 L 1037,600 L 1036,601 L 1035,601 L 1033,603 L 1032,603 L 1031,604 L 1030,604 L 1028,606 L 1027,606 L 1025,608 L 1023,608 L 1022,609 L 1021,609 L 1018,612 L 1017,612 L 1016,613 L 1014,613 L 1012,615 L 1011,615 L 1010,616 L 1008,616 L 1006,618 L 1005,618 L 1004,619 L 1002,619 L 999,622 L 998,622 L 997,623 L 996,623 L 995,624 L 994,624 L 993,625 L 990,625 L 990,626 L 989,627 L 988,626 L 985,629 L 983,629 L 982,630 L 981,630 L 979,632 L 977,632 L 975,634 L 974,634 L 973,635 L 972,635 L 971,636 L 970,636 L 969,637 L 968,637 L 967,638 L 965,638 L 963,640 L 962,640 L 961,641 L 960,641 L 959,642 L 958,642 L 957,643 L 956,643 L 954,645 L 953,645 L 952,646 L 950,646 L 948,648 L 947,648 L 946,649 L 945,649 L 944,650 L 943,650 L 941,652 L 940,652 L 938,654 L 937,654 L 936,655 L 935,655 L 934,656 L 933,656 L 929,660 L 927,660 L 925,662 L 924,662 L 923,663 L 922,663 L 921,664 L 920,664 L 919,665 L 919,666 L 918,667 L 916,667 L 915,668 L 914,668 L 914,669 L 913,670 L 912,670 L 911,671 L 910,671 L 907,674 L 906,674 L 906,675 L 905,676 L 904,676 L 903,677 L 902,677 L 902,678 L 900,680 L 899,680 L 899,681 L 898,682 L 897,682 L 897,683 L 895,685 L 895,686 L 892,689 L 893,690 L 890,693 L 890,694 L 888,696 L 888,698 L 887,699 L 886,699 L 886,700 L 885,701 L 885,702 L 883,704 L 883,705 L 881,707 L 881,709 L 880,710 L 880,711 L 879,712 L 878,712 L 878,714 L 877,715 L 876,715 L 876,717 L 873,720 L 873,721 L 870,724 L 870,726 L 868,728 L 867,728 L 867,729 L 864,732 L 864,733 L 862,735 L 862,736 L 861,737 L 860,737 L 859,738 L 859,740 L 851,748 L 851,749 L 847,753 L 847,754 L 841,760 L 840,760 L 841,761 L 840,762 L 839,762 L 833,768 L 833,769 L 832,770 L 831,770 L 830,771 L 830,772 L 829,773 L 828,773 L 828,774 L 827,775 L 826,775 L 825,776 L 824,776 L 824,777 L 823,778 L 822,778 L 822,779 L 821,780 L 820,780 L 820,781 L 819,782 L 818,782 L 816,784 L 815,784 L 811,788 L 810,788 L 809,789 L 808,789 L 807,790 L 806,790 L 805,791 L 803,791 L 802,792 L 799,792 L 798,793 L 793,793 L 792,794 L 786,794 L 785,795 L 780,795 L 779,796 L 778,795 L 763,795 L 761,797 L 755,797 L 754,798 L 753,798 L 752,799 L 749,799 L 748,800 L 746,800 L 745,801 L 743,801 L 742,802 L 740,802 L 739,803 L 738,803 L 736,805 L 735,805 L 733,807 L 732,807 L 730,809 L 730,811 L 729,812 L 728,812 L 728,813 L 727,814 L 727,815 L 725,817 L 725,818 L 724,819 L 724,822 L 723,823 L 723,830 L 724,831 L 719,836 L 716,836 L 715,837 L 711,837 L 710,838 L 706,838 L 705,839 L 704,839 L 703,838 L 702,839 L 697,839 L 696,840 L 690,840 L 689,841 L 687,841 L 686,842 L 678,842 L 677,843 L 674,843 L 673,844 L 672,844 L 671,843 L 670,844 L 667,844 L 666,845 L 660,845 L 659,846 L 655,846 L 654,847 L 646,847 L 645,848 L 636,848 L 635,849 L 630,849 L 629,850 L 626,850 L 625,849 L 624,849 L 623,850 L 622,849 L 621,850 L 617,850 L 616,851 L 614,851 L 613,850 L 612,851 L 607,851 L 606,852 L 602,852 L 601,853 L 600,852 L 599,853 L 595,853 L 594,854 L 587,854 L 585,856 L 579,856 L 578,857 L 576,857 L 575,858 L 574,858 L 573,859 L 572,859 L 571,860 L 568,860 L 567,861 L 566,861 L 565,862 L 564,862 L 563,863 L 561,863 L 557,867 L 555,867 L 553,869 L 551,869 L 550,870 L 549,870 L 547,872 L 546,872 L 545,873 L 543,873 L 541,875 L 540,875 L 538,877 L 537,877 L 536,878 L 534,878 L 531,881 L 529,881 L 527,883 L 525,883 L 521,887 L 519,887 L 518,888 L 517,888 L 517,889 L 516,890 L 515,890 L 513,892 L 511,892 L 508,895 L 507,895 L 505,897 L 503,897 L 500,900 L 499,900 L 496,903 L 495,902 L 495,903 L 492,906 L 491,906 L 490,907 L 489,907 L 486,910 L 485,910 L 484,911 L 483,911 L 481,913 L 480,913 L 480,914 L 479,915 L 477,915 L 473,919 L 471,919 L 469,921 L 468,921 L 468,922 L 466,924 L 465,923 L 463,925 L 462,925 L 460,927 L 458,927 L 457,928 L 456,928 L 454,930 L 453,930 L 452,931 L 451,931 L 450,932 L 447,932 L 446,933 L 445,933 L 443,935 L 441,935 L 440,936 L 438,936 L 437,937 L 436,937 L 435,936 L 435,937 L 434,938 L 432,938 L 431,939 L 429,939 L 428,940 L 427,940 L 425,942 L 422,942 L 421,943 L 424,946 L 428,946 L 429,947 L 430,947 L 432,945 L 433,946 L 433,947 L 434,947 L 435,946 L 436,947 L 436,948 L 434,950 L 434,951 L 431,954 L 430,954 L 430,955 L 429,956 L 428,956 L 427,957 L 426,957 L 423,960 L 421,960 L 418,963 L 416,963 L 414,965 L 413,965 L 412,966 L 411,966 L 409,968 L 407,968 L 405,970 L 404,970 L 403,971 L 402,971 L 401,972 L 399,972 L 397,974 L 395,974 L 393,976 L 392,976 L 391,977 L 389,977 L 387,979 L 384,979 L 384,980 L 383,981 L 384,981 L 385,982 L 385,983 L 384,984 L 385,985 L 386,985 L 387,986 L 389,986 L 390,985 L 399,985 L 400,984 L 402,984 L 403,983 L 405,983 L 406,982 L 408,982 L 409,981 L 414,981 L 415,980 L 416,980 L 418,982 L 415,985 L 415,986 L 414,987 L 413,987 L 408,992 L 407,992 L 407,993 L 406,994 L 405,994 L 400,999 L 399,999 L 399,1000 L 397,1002 L 396,1002 L 394,1004 L 393,1004 L 391,1006 L 390,1006 L 383,1013 L 382,1013 L 382,1014 L 381,1015 L 381,1017 L 382,1018 L 382,1020 L 392,1020 L 393,1019 L 397,1019 L 398,1018 L 399,1018 L 400,1017 L 402,1017 L 403,1016 L 405,1016 L 405,1015 L 406,1014 L 408,1014 L 409,1013 L 411,1013 L 412,1012 L 413,1012 L 415,1010 L 416,1011 L 416,1010 L 417,1009 L 422,1009 L 423,1010 L 423,1011 L 422,1012 L 422,1014 L 420,1016 L 420,1017 L 419,1018 L 418,1018 L 418,1020 L 417,1021 L 416,1021 L 416,1023 L 415,1024 L 414,1024 L 414,1025 L 413,1026 L 413,1027 L 412,1028 L 412,1029 L 409,1032 L 409,1033 L 407,1035 L 407,1036 L 406,1037 L 406,1038 L 405,1039 L 405,1041 L 404,1042 L 404,1044 L 406,1046 L 406,1047 L 412,1047 L 413,1046 L 414,1047 L 415,1046 L 417,1046 L 419,1044 L 420,1044 L 421,1043 L 422,1043 L 425,1040 L 426,1040 L 427,1039 L 428,1039 L 429,1038 L 429,1037 L 430,1036 L 431,1036 L 433,1034 L 434,1034 L 437,1031 L 438,1031 L 438,1029 L 439,1028 L 440,1028 L 442,1026 L 443,1027 L 444,1027 L 444,1026 L 445,1025 L 446,1025 L 447,1026 L 447,1027 L 446,1028 L 446,1029 L 447,1030 L 447,1031 L 446,1032 L 445,1032 L 445,1035 L 444,1036 L 444,1037 L 443,1038 L 443,1039 L 442,1040 L 442,1041 L 441,1042 L 440,1042 L 441,1042 L 442,1043 L 441,1044 L 440,1044 L 440,1047 L 438,1049 L 438,1051 L 437,1052 L 437,1054 L 436,1055 L 436,1056 L 435,1057 L 435,1065 L 436,1066 L 437,1066 L 438,1067 L 439,1067 L 440,1068 L 441,1067 L 444,1067 L 445,1066 L 446,1066 L 447,1067 L 447,1066 L 449,1064 L 450,1064 L 451,1063 L 452,1063 L 452,1062 L 453,1061 L 454,1061 L 456,1059 L 457,1059 L 460,1056 L 460,1055 L 461,1054 L 462,1054 L 462,1053 L 463,1052 L 464,1052 L 464,1051 L 467,1048 L 467,1047 L 470,1044 L 470,1043 L 471,1042 L 471,1041 L 472,1040 L 473,1040 L 474,1039 L 474,1038 L 475,1037 L 475,1036 L 478,1033 L 479,1033 L 480,1032 L 480,1031 L 481,1030 L 484,1033 L 484,1034 L 483,1035 L 482,1034 L 482,1036 L 483,1037 L 483,1038 L 482,1039 L 482,1043 L 481,1044 L 481,1049 L 480,1050 L 480,1055 L 479,1056 L 479,1057 L 480,1058 L 480,1060 L 481,1061 L 481,1062 L 482,1063 L 483,1062 L 485,1064 L 488,1064 L 489,1063 L 490,1063 L 491,1062 L 492,1062 L 493,1061 L 494,1061 L 502,1053 L 503,1053 L 502,1053 L 501,1052 L 502,1051 L 504,1051 L 506,1049 L 506,1048 L 507,1047 L 508,1047 L 509,1046 L 509,1045 L 510,1044 L 511,1044 L 511,1042 L 514,1039 L 514,1038 L 517,1035 L 518,1035 L 519,1034 L 520,1034 L 521,1033 L 525,1033 L 526,1032 L 529,1032 L 530,1031 L 532,1031 L 534,1029 L 536,1029 L 537,1028 L 538,1028 L 539,1027 L 540,1027 L 541,1026 L 542,1026 L 543,1025 L 543,1024 L 544,1023 L 546,1023 L 548,1021 L 549,1022 L 549,1021 L 550,1020 L 551,1020 L 555,1016 L 556,1016 L 559,1013 L 561,1013 L 562,1012 L 563,1013 L 564,1012 L 567,1012 L 568,1011 L 569,1012 L 570,1011 L 571,1011 L 572,1010 L 575,1010 L 576,1009 L 577,1009 L 578,1008 L 579,1008 L 579,1007 L 580,1006 L 581,1006 L 584,1003 L 586,1003 L 586,1002 L 587,1001 L 588,1001 L 589,1000 L 590,1000 L 592,998 L 594,998 L 595,997 L 598,997 L 599,996 L 600,996 L 601,995 L 602,996 L 603,995 L 604,995 L 605,994 L 607,994 L 609,992 L 611,992 L 612,991 L 612,990 L 613,989 L 615,989 L 616,988 L 617,988 L 620,985 L 623,985 L 625,983 L 626,984 L 627,984 L 628,983 L 630,983 L 631,982 L 632,983 L 633,983 L 634,982 L 635,983 L 636,982 L 637,982 L 638,981 L 640,981 L 641,980 L 643,980 L 644,979 L 645,979 L 646,978 L 646,977 L 647,976 L 649,976 L 650,975 L 654,975 L 655,974 L 657,974 L 658,973 L 663,973 L 664,972 L 667,972 L 669,970 L 670,970 L 671,971 L 673,969 L 676,969 L 677,968 L 679,968 L 680,967 L 683,967 L 684,966 L 687,966 L 688,965 L 689,965 L 690,964 L 692,964 L 693,963 L 696,963 L 697,962 L 698,962 L 699,961 L 700,961 L 701,960 L 702,960 L 703,959 L 704,959 L 704,958 L 705,957 L 706,957 L 706,956 L 708,954 L 710,954 L 713,951 L 714,952 L 717,952 L 718,953 L 721,953 L 722,954 L 725,954 L 726,955 L 729,955 L 730,956 L 738,956 L 739,957 L 740,957 L 741,956 L 743,956 L 744,955 L 748,955 L 749,954 L 750,954 L 751,953 L 753,953 L 755,951 L 756,951 L 757,950 L 758,950 L 760,948 L 761,948 L 762,947 L 766,947 L 767,946 L 777,946 L 778,945 L 779,945 L 780,944 L 782,944 L 784,942 L 784,940 L 785,939 L 785,930 L 784,929 L 784,926 L 785,925 L 786,925 L 787,926 L 791,926 L 792,927 L 795,927 L 796,928 L 797,928 L 798,929 L 799,928 L 800,929 L 800,930 L 802,930 L 803,931 L 804,931 L 805,930 L 806,931 L 806,932 L 813,932 L 814,933 L 815,933 L 816,934 L 821,934 L 822,935 L 836,935 L 837,934 L 839,934 L 840,933 L 843,933 L 844,932 L 845,932 L 846,931 L 848,931 L 850,929 L 853,929 L 854,930 L 855,930 L 856,931 L 858,931 L 859,932 L 862,932 L 863,933 L 864,933 L 865,934 L 866,934 L 867,935 L 872,935 L 874,937 L 875,937 L 876,938 L 877,938 L 878,939 L 878,940 L 882,944 L 882,945 L 884,947 L 884,948 L 889,953 L 889,954 L 893,958 L 893,959 L 896,962 L 896,963 L 898,965 L 899,965 L 900,966 L 900,968 L 903,971 L 904,971 L 905,972 L 905,973 L 908,976 L 908,977 L 909,977 L 910,978 L 910,979 L 914,983 L 914,984 L 915,984 L 916,985 L 916,986 L 918,988 L 918,989 L 920,989 L 921,990 L 921,991 L 922,992 L 922,993 L 924,995 L 924,996 L 925,996 L 928,999 L 928,1000 L 929,1000 L 930,1001 L 930,1002 L 934,1006 L 935,1006 L 936,1007 L 938,1007 L 939,1008 L 944,1008 L 945,1009 L 946,1009 L 947,1008 L 948,1008 L 950,1010 L 951,1010 L 952,1011 L 954,1011 L 955,1012 L 959,1012 L 960,1013 L 961,1012 L 963,1012 L 964,1011 L 965,1011 L 966,1010 L 967,1010 L 970,1007 L 974,1007 L 975,1006 L 976,1006 L 977,1005 L 978,1006 L 979,1005 L 983,1005 L 984,1004 L 985,1005 L 986,1005 L 987,1004 L 988,1005 L 995,1005 L 996,1006 L 997,1006 L 998,1005 L 999,1005 L 1000,1006 L 1007,1006 L 1008,1007 L 1014,1007 L 1015,1006 L 1023,1006 L 1024,1005 L 1027,1005 L 1028,1006 L 1028,1005 L 1029,1004 L 1030,1004 L 1031,1003 L 1032,1003 L 1034,1001 L 1037,1001 L 1038,1000 L 1039,1000 L 1040,999 L 1044,999 L 1045,998 L 1056,998 L 1057,999 L 1058,998 L 1059,999 L 1062,999 L 1063,1000 L 1065,1000 L 1066,1001 L 1069,1001 L 1070,1002 L 1080,1002 L 1081,1001 L 1083,1001 L 1085,999 L 1085,997 L 1084,997 L 1083,996 L 1083,995 L 1080,992 L 1078,992 L 1076,990 L 1075,990 L 1073,988 L 1071,988 L 1070,987 L 1069,987 L 1067,985 L 1065,985 L 1064,984 L 1063,984 L 1061,982 L 1060,982 L 1059,981 L 1057,981 L 1056,980 L 1055,980 L 1053,978 L 1052,978 L 1051,977 L 1050,977 L 1049,976 L 1048,976 L 1046,974 L 1044,974 L 1042,972 L 1041,972 L 1040,971 L 1039,971 L 1038,970 L 1037,970 L 1035,968 L 1033,968 L 1031,966 L 1030,966 L 1028,964 L 1027,964 L 1025,962 L 1024,962 L 1023,961 L 1022,961 L 1021,960 L 1020,960 L 1019,959 L 1018,959 L 1017,958 L 1016,958 L 1015,957 L 1015,956 L 1013,956 L 1010,953 L 1009,953 L 1008,952 L 1007,952 L 1006,951 L 1006,950 L 1004,950 L 1003,949 L 1003,948 L 1002,948 L 999,945 L 997,945 L 994,942 L 993,942 L 991,940 L 990,940 L 987,937 L 986,937 L 984,935 L 983,935 L 982,934 L 982,933 L 981,933 L 980,932 L 979,932 L 977,930 L 976,930 L 974,928 L 974,927 L 973,927 L 972,926 L 971,926 L 967,922 L 966,922 L 963,919 L 962,919 L 960,917 L 959,917 L 958,916 L 958,915 L 957,915 L 953,911 L 953,910 L 952,910 L 950,908 L 950,907 L 947,904 L 947,902 L 948,901 L 948,900 L 947,899 L 948,898 L 949,898 L 950,897 L 950,896 L 953,893 L 953,892 L 954,891 L 954,890 L 955,889 L 955,881 L 958,878 L 959,878 L 960,877 L 960,876 L 962,874 L 963,874 L 965,872 L 965,871 L 966,870 L 966,869 L 968,867 L 968,866 L 969,865 L 969,864 L 970,863 L 971,863 L 971,862 L 973,860 L 973,859 L 974,858 L 975,858 L 976,857 L 977,857 L 978,858 L 979,858 L 980,857 L 983,857 L 984,856 L 985,856 L 986,855 L 989,855 L 991,853 L 992,853 L 997,848 L 997,846 L 998,845 L 998,843 L 999,842 L 999,835 L 998,834 L 998,831 L 997,830 L 997,828 L 996,827 L 996,825 L 995,824 L 995,823 L 994,822 L 994,821 L 993,820 L 993,818 L 992,817 L 992,816 L 991,815 L 991,814 L 990,813 L 990,811 L 989,810 L 989,809 L 990,808 L 989,807 L 989,805 L 990,804 L 990,802 L 991,801 L 991,800 L 993,798 L 994,798 L 995,797 L 995,796 L 996,795 L 999,795 L 1000,794 L 1005,794 L 1006,795 L 1007,795 L 1008,796 L 1011,796 L 1012,797 L 1013,797 L 1016,800 L 1018,800 L 1019,801 L 1020,801 L 1021,802 L 1022,802 L 1023,803 L 1026,803 L 1027,804 L 1030,804 L 1031,805 L 1032,805 L 1033,804 L 1039,804 L 1042,801 L 1043,801 L 1043,800 L 1045,798 L 1045,795 L 1046,794 L 1046,793 L 1047,792 L 1047,790 L 1048,789 L 1050,789 L 1052,787 L 1054,787 L 1056,785 L 1060,785 L 1062,783 L 1064,783 L 1066,781 L 1067,781 L 1067,779 L 1068,778 L 1068,774 L 1069,773 L 1068,772 L 1068,771 L 1067,770 L 1067,769 L 1065,767 L 1065,766 L 1063,764 L 1064,763 L 1063,762 L 1063,761 L 1066,758 L 1067,759 L 1068,758 L 1071,758 L 1072,757 L 1073,758 L 1074,757 L 1077,757 L 1079,755 L 1081,755 L 1082,754 L 1082,752 L 1083,751 L 1084,751 L 1085,752 L 1084,751 L 1086,749 L 1086,748 L 1095,739 L 1096,739 L 1096,738 L 1097,737 L 1098,737 L 1098,736 L 1101,733 L 1101,732 L 1103,730 L 1103,728 L 1104,727 L 1105,727 L 1106,726 L 1107,726 L 1109,724 L 1111,724 L 1113,722 L 1114,722 L 1115,721 L 1116,721 L 1118,719 L 1120,719 L 1120,717 L 1121,716 L 1122,716 L 1122,713 L 1123,712 L 1123,711 L 1124,710 L 1124,709 L 1127,706 L 1128,706 L 1130,704 L 1132,704 L 1133,703 L 1135,703 L 1137,701 L 1138,701 L 1140,699 L 1141,699 L 1142,700 L 1143,699 L 1143,698 L 1144,697 L 1146,697 L 1147,696 L 1148,696 L 1149,695 L 1150,695 L 1151,694 L 1151,693 L 1152,692 L 1153,692 L 1154,691 L 1154,690 L 1160,684 L 1161,684 L 1162,683 L 1163,683 L 1164,682 L 1166,682 L 1167,681 L 1168,681 L 1169,680 L 1171,680 L 1170,679 L 1171,678 L 1174,678 L 1174,677 L 1175,676 L 1177,676 L 1179,674 L 1180,674 L 1184,670 L 1184,669 L 1185,668 L 1186,668 L 1186,667 L 1187,666 L 1187,665 L 1188,664 L 1189,664 L 1190,663 L 1192,663 L 1192,662 L 1193,661 L 1197,661 L 1198,660 L 1200,660 L 1201,659 L 1203,659 L 1203,658 L 1204,657 L 1208,657 L 1208,656 L 1209,655 L 1211,655 L 1212,654 L 1213,654 L 1214,653 L 1215,653 L 1216,652 L 1218,652 L 1220,650 L 1221,650 L 1223,648 L 1223,647 L 1224,646 L 1224,645 L 1225,644 L 1225,643 L 1226,642 L 1226,641 L 1228,639 L 1229,639 L 1230,638 L 1236,638 L 1237,637 L 1239,637 L 1240,636 L 1245,636 L 1246,635 L 1248,635 L 1249,634 L 1252,634 L 1253,633 L 1258,633 L 1259,632 L 1261,632 L 1262,631 L 1263,631 L 1264,630 L 1265,630 L 1266,631 L 1266,629 L 1267,628 L 1268,628 L 1268,626 L 1267,625 L 1267,624 L 1263,624 L 1262,623 L 1248,623 L 1247,622 L 1235,622 L 1234,621 L 1211,621 L 1210,620 L 1207,620 L 1206,619 L 1206,618 L 1207,617 L 1208,618 L 1209,617 L 1211,617 L 1212,616 L 1214,616 L 1215,617 L 1215,616 L 1216,615 L 1221,615 L 1222,614 L 1226,614 L 1228,612 L 1230,612 L 1231,611 L 1232,612 L 1233,611 L 1235,611 L 1236,610 L 1242,610 L 1243,609 L 1245,609 L 1246,608 L 1250,608 L 1251,607 L 1252,607 L 1253,606 L 1256,606 L 1257,605 L 1258,605 L 1259,606 L 1260,605 L 1261,605 L 1262,604 L 1266,604 L 1267,603 L 1270,603 L 1272,601 L 1275,601 L 1276,600 L 1277,600 L 1279,598 L 1281,598 L 1285,594 L 1285,593 L 1284,594 L 1283,593 L 1283,592 L 1282,592 L 1281,591 L 1267,591 L 1266,592 L 1264,592 L 1263,591 L 1262,592 L 1253,592 L 1252,593 L 1244,593 L 1243,594 L 1234,594 L 1233,595 L 1232,594 L 1231,595 L 1227,595 L 1226,596 L 1215,596 L 1214,597 L 1209,597 L 1208,598 L 1207,598 L 1206,597 L 1203,597 L 1202,598 L 1201,598 L 1200,597 L 1200,596 L 1201,595 L 1204,595 L 1205,594 L 1207,594 L 1208,593 L 1209,593 L 1210,592 L 1214,592 L 1215,591 L 1217,591 L 1219,589 L 1220,589 L 1221,588 L 1223,588 L 1224,587 L 1225,587 L 1226,586 L 1227,587 L 1229,585 L 1231,585 L 1232,584 L 1236,584 L 1238,582 L 1240,582 L 1241,581 L 1242,581 L 1243,580 L 1245,580 L 1246,579 L 1247,579 L 1248,578 L 1250,578 L 1251,577 L 1252,577 L 1254,575 L 1257,575 L 1258,574 L 1259,574 L 1261,572 L 1262,572 L 1263,571 L 1264,571 L 1266,569 L 1269,569 L 1270,568 L 1271,568 L 1271,567 L 1273,565 L 1274,565 L 1274,560 L 1264,560 L 1263,561 L 1260,561 L 1259,562 L 1255,562 L 1254,563 L 1251,563 L 1250,564 L 1245,564 L 1244,565 L 1242,565 L 1241,566 L 1238,566 L 1237,567 L 1233,567 L 1232,568 L 1229,568 L 1228,569 L 1225,569 L 1224,570 L 1221,570 L 1220,571 L 1216,571 L 1215,572 L 1213,572 L 1212,573 L 1210,573 L 1209,574 L 1205,574 L 1204,575 L 1201,575 L 1200,576 L 1199,575 L 1197,577 L 1193,577 L 1192,578 L 1191,577 L 1190,578 L 1186,578 L 1185,577 L 1186,576 L 1186,575 L 1187,574 L 1189,574 L 1190,573 L 1192,573 L 1192,572 L 1193,571 L 1195,571 L 1196,570 L 1198,570 L 1199,569 L 1201,569 L 1205,565 L 1207,565 L 1208,564 L 1209,564 L 1211,562 L 1212,562 L 1213,561 L 1214,561 L 1215,560 L 1217,560 L 1217,559 L 1218,558 L 1220,558 L 1222,556 L 1224,556 L 1227,553 L 1228,553 L 1230,551 L 1231,551 L 1233,549 L 1235,549 L 1237,547 L 1238,547 L 1238,546 L 1239,545 L 1240,545 L 1242,543 L 1243,543 L 1245,541 L 1246,541 L 1249,538 L 1249,537 L 1251,535 L 1251,532 L 1250,531 L 1244,531 L 1243,532 L 1240,532 L 1239,533 L 1238,533 L 1237,534 L 1235,534 L 1234,535 L 1232,535 L 1231,536 L 1229,536 L 1227,538 L 1225,538 L 1224,539 L 1222,539 L 1221,540 L 1220,540 L 1218,542 L 1216,542 L 1215,543 L 1212,543 L 1211,544 L 1210,544 L 1208,546 L 1207,546 L 1206,547 L 1204,547 L 1203,548 L 1202,548 L 1201,549 L 1199,549 L 1197,551 L 1196,551 L 1195,552 L 1192,552 L 1190,554 L 1189,554 L 1188,555 L 1187,555 L 1186,556 L 1184,556 L 1183,557 L 1182,557 L 1181,558 L 1180,558 L 1179,559 L 1177,559 L 1176,560 L 1174,560 L 1174,561 L 1173,562 L 1171,562 L 1170,563 L 1169,563 L 1168,564 L 1166,564 L 1165,565 L 1164,565 L 1163,566 L 1162,566 L 1161,567 L 1160,567 L 1159,568 L 1158,567 L 1157,568 L 1156,568 L 1155,569 L 1153,569 L 1152,570 L 1149,570 L 1147,572 L 1145,572 L 1144,571 L 1144,570 L 1145,569 L 1145,568 L 1146,567 L 1147,567 L 1148,566 L 1149,566 L 1150,565 L 1151,565 L 1151,564 L 1152,563 L 1153,563 L 1154,562 L 1156,562 L 1157,561 L 1157,560 L 1158,559 L 1159,559 L 1160,560 L 1159,559 L 1161,557 L 1162,557 L 1163,556 L 1164,556 L 1164,555 L 1166,553 L 1167,553 L 1168,552 L 1169,552 L 1170,551 L 1170,550 L 1171,549 L 1172,549 L 1173,548 L 1174,548 L 1174,547 L 1175,546 L 1177,546 L 1177,545 L 1179,543 L 1181,543 L 1181,542 L 1183,540 L 1184,540 L 1188,536 L 1188,535 L 1189,534 L 1190,534 L 1194,530 L 1194,529 L 1195,528 L 1196,528 L 1195,527 L 1197,525 L 1197,523 L 1196,522 L 1196,521 Z " fill="currentColor"/>
          </svg>
          <h1>Wing&apos;s HomePage</h1>
          <nav>
            <Link className='headerLinkTo' href='./'>Home</Link>
            <Link className='headerLinkTo' href='./about'>About Me</Link>
            <Link className='headerLinkTo' href='./contact'>Contacts</Link>
          </nav>
        </header>
        {children}
        <footer>
          <p>&copy; 2025 Wing. 無断転載・無断改変を禁じます．</p>
          <div className="footerContainer">
            <p>連絡先：</p>
            <a href="mailto:wing@me.wing.osaka">wing@me.wing.osaka</a>
          </div>
          <div className="footerContainer">
            <p>ブログ：</p>
            <a href="./SNS/Blog" target="_blank">https://blog.wing.osaka/posts</a>
          </div>
          <div className="footerContainer">
            <p>ダウンロード：</p>
            <Link href="/downloads">https://wing.osaka/downloads</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
