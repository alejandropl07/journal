import React from "react";
import NotesAppBar from "./NotesAppBar";

const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes__content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
        />
        <textarea
          placeholder="What happened today"
          className="notes__text-area"
        ></textarea>
        <div className="notes__image">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgWFhUYGBgaHBoYGBoYGBgaGBgYGBoaGhgYGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDs0Py40NTQBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xAA9EAACAQMDAgQDBQUHBAMAAAABAhEAAyEEEjEFQQYiUWETcYEyQpGhwRRSYrHRByMkcoLh8DOSwvEVQ6L/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A6itwRSzqMGgdD1MEST9K91eq3HFADrrJEMOIzReh1EgfKiAoK5pa2oVSBxmgU+PrW/TvHYT+Ga5IUrr/AIpk2H7+U/yrkDNQM/C14rcYA8j8cxXY+h9JUgO2THeuE6C4UuowP3h+E13rwzrS6AQRQE9b0ihMYNe9FclB+tM9XpwygGoUshFEUCLrVtzMehpX4f0TMd5HFWLqTQhPsaSeHeqAgiOJFBYdPdgx6UxS5Vb/AG3+8AHen9q2eTQa3Wk1XvFPUdi944p1qCScdjVa8Q3gyspG79KCTw71YOnyqO/q1LmCBmlui6lprFqHuW0McF1DH6TNKdL4l0auzPfXb2hHYmfktAbr77uSJ4oHQXXRzyaN1Pifp7jyXlB/iV1/mtQaO9ad5S4jz+6yk/hNAeC9w96snRemAZbmhenptyRTu3rFHtQM0QKMVHd1KDmg11Ybg1ILAbmgKS4p4FSMkio7dsCpGagCZCDQ3VQzWzHpUfUesJb+0aR3PEyuCqgn37UHJr1k3Neytjz5+gmuh9RUJYEc8D3qn31H7SXYbWLT8sVYTe3gCZoAOm2fMWde2CRil3WkV3ULyB5iKsGo1KIIIzEUjdwWkUBHQ7AV90TmAB+ddT6FbG0Rj2qo+GPhBMkA95irZY6lbTgj2IoLGtY0UrsdVRsTmpdRqQFkGg91WpRKy31BCJkVROrdYLOVBoT9sfscUEOm1WeTTQ68AiTmoLehQCfak19iH5oOhaa7uSqz1+VdWHqKO6ZqpUZpX158iT3FAf1K+G05J/dz+FcevLmur65QdOYPauVakeY/M0GaOPiJ/nX+Yrvnh9QqAxXz4HggjsQfwruXhjqAe2B3gfyoLHrNVxU9khlFV/qF0o4njinOmbyj5UCnrbjYVnkED8KrXRlKKTySSPavfG1xw6hGIk/8/nRXTtMUtjdJxPzoB+n6ybwJOP8Aerq2uVLZd3VEUSzOQFA9ya5Z1Pqyae5vb7IBhB9pm9F/r2qndY65qdafOx2JuZbak7ECqWJPq0KcnJ7elBeuvf2nIhZdKvxDx8RwQg/yrgt9Y+tULqPWtVqSWuXjEE7QQix6Kojd8smrd4V8OaW2i3NWrFnQXEMBkVTwpHAfjysD9oRmYUeI9UhQ7Gt7XZ1CfDgwJlwwGCNyejHbGQIIV1dGskbtxAk7fMTyTEEg/OnPT/De9wjh0aCzmFCoi8tJPm4OMds81Dd1CNZdCBv37y0DB4Kg7QQJIxA4zMCYtFdUuvmgkQ5JaGOYUbIMEQOfee1A/wCmeCbd5A6XHYG4yT5AqjITcx7kgGRiGA5NC6bwHeuKGtmT8O3dAZdo85fBfdCx8MmTzNPtLpGXSI9p4IVn5O5jksCAYTuPMIIHuRTLpNzUlHsL5kTZbPw9gZ7aWBtAYmG+9IUZ2tM8UFHtanqOk+y7sgPE/EQwSO+QPKfSrR0D+0Gy5CapTabjessk/wAQ5X86vVzoFpryINpNsNcckCRvAtoCqwPMEckjvbBMzmPq/gLQ308yFXj/AKiHa+BAJjyn6igP0GmRlDo4dGyrKQVI9iKZIhrj13T6/oj77bfG0rHPOwzxvXOxv4hg/lXTPDniWzrLXxLRyMMhjejejD09D3oHaitdThTQepusomgbHXFYlTQU7xCHe6FM7ZzFT3NALdskKeJz8qs7W7bNuxQXWbybCAexoOKdZ1rtfJOMiB+QFXDomluuAYJ9qpHV2/xBI7MI/Guh+G+uKmxWU+8UE2p6BccyysB+NVzqujNhhJJExntXUNd1i0qTMekjk1zPxbdN1pWfWgP6PZLrzA7Rkmrf0boTAAmYPY1zvwp1j4ThHgdga7N0rqSMgjNAPqOkQvlJB9qrmt6i6KVJMjFW3qmuhTtHauZ+JLrEcwTQQWdSu9txyf508saYlQcVQrG4NM1btH1wBACBPzoG9zQsokMY96TaplVvNTLX9UIjv7Uh1Lh2k/hQP+j3wTA4rTxVa8snHpUPS9WiGefYdqH8UdXVgFGaCVdV/h8n7tc71TZPzNXNtQDa+lUbWvk/OgiJFdI/s/6idsE5rmCmrj4G3b+cCg6J1TW77irVgtuQoj0qogg3lq42mGz6UFA8VOTet+gaT9KZda69bsabe5kxCrwWaMAfr7A0o8T3x+0JPr9KofXuovrNQFQEqDstKO8mC3zJz7CPSgDu3Lmpum48xjcR9lFzCrPHBgdzPvV0bUWE0TW7CBTtcFyRuZmMqAQJmdi7jElVAiYpfb6elh7SAghfhu7SDLMoLyJiA2BPZe9TeJNXpwq/CAAUKQQoBkXFlmUZG4bj5uMDE0FkXq9osqvbt7re4M7SQR9yYEkqFMEgniRiap3WltXCfhpsLicmQCCJ2gRt5LQMTTVkDOxZFM/Zi5sXYQCCzuIZpklpyxPMgUi1r7ZjlmEoPNIBMwCeeDg9jQBN07aoZjuzzuI7AQPcfn61pobi75GDBBUlpceZhJmOVUH5j0JqT9saJVSASQV+zJgqNuQd09hkfnXmg0nLebdwAVVRuJaYk5EBcmB5j6UFq07u4d9QXt2iG220cqqjaQ0AHInaAs8DvMlp4X6iLVoB7jTcVGgLO5nlmG6OASoj+EiczVGfVNDZcwLgJDQqFyVeIO3IxA5BirN0p3dBeZ122wFB2FrahVJ85UH6mDlsxmgsfS/EZd3KoXcy6l3BZlWF2rCjdAHAgwZxVhs6TUu6Ob3kksUKBAAYHlyGBGeQOTzgUN4e6ciom9UuQg2FVBBVgrMv2duGGIJ7ycUfeuBcCy4BEALHMyQQpMYM9zEwPUGItoyFGZbikEMGghpGZAEcVy/xF4fvdLvDXaIn4M/3lsyQgY/Zb95DxPKmKuDdVCOS0twNiAlkJJXzMRiTgZ8xlQJgU0SLyEEIbTqVZXBlgRBEGMc8ifl2D3ofVrOu063bZw2GU/aRx9pG/r3EGoH8OoCW+vNc9t2rnRteFJP7JqODMhRPJ/iQnPqpn5dC1PUXBjaSOx9aBF1a61rAMVS9b1C4dxLHaatfWtSIJYQc81S9fcLIdoxmgql25N2T61cujXkBBP4+lUdUJePerTpkKLNBYNdqgxABmPWh9inmM0me8Zn07UFqOrsGgUDHXaNVO4dqvvhHqiOAJyBB+lcwbqLOINWDwjd2E4OTQdN611BESYrl/VepB3ro93o3xEBZiDGPSuWdX0TW7rocwefWgjd4zNR/tPvS7VO/HAodN0c0F3uaj1z70DqNTQ6auhrjyaBroNYF5NLOtawMRBk15cKhfek9y5mgd29W2yM8Ui1amc060VwFKXdQWgWrirF4W1Lh9q5mq+60f0PWG280HTtDbcPuY8+lW3TasBYJjHeue6LqzO47Cp9f1gocH8aBR/aF1AByq8sCv0P2j+GP9VV3w3p1k3Hk8oiyV3MRnzcDBj60H13Wm7dLHtgfrTTR2YVQNoIECRJP3mZYBIM+3Ye8Azu+a6EZQEBBKKxO2FYlQxhZPGe9D9aRUt+UqwiJKr/eQwIYwJ4X1OD8zWMoBIdiSUyYPmEnheJEkz/Sk2sdipGCoESMgSRB9uR+dBZbOiV0D27lsMTLK93zRyCQw+ysEhix5AyaqV7VstwlT6YyVJ78xiinvEKQF4ETMNmZ25yIjB5zQS3FUndJPAOPXMCPng4OaB10/Vq+HYAFgVQYMARubaCCQ0AAgHJg0fqwuzdBBBEMqqYhpAIClQpwY9Ae1IFuIGIssQWIAaPuwD3HlzzE8HtTR9e32HYdj5DO4SV27QMRziPrQD3tbvDy77dpCjaFnIkHaoXMycdgJECr50/qGmQNp9Mj6h3O2WDAbViVtwsMwWTOBk47GjXrSbSsqWDKqxErLrugGSOCMHvTm31FAQgchUACDccHvzwM/wD6PFB1Jeq3QQjoLU+VZAJ7QygRODxtERnOKz9je6hD3dxP/wBgClBPZFjjtIIB7yeOci8wIBZuxBJJmJExwDBP4n1qax1a8g8t1wJ9SfUnnHeaDp+g0Nu0iqFQkEMW2QS4+/7Ex296KfaxDHkceZwMZBgGDk1y+14h1Z+zdY/6UP8A41vc6/q+TdIH+RBj/txQXbxZ0y3r9G9ry/EjfbPdLqztBMYBypxwxpN/Zn1pb+j+Hd/6unPw33fa2fcJBzMAr/oquJ1++GMX33GP3RJ+giKr+h6k+m19whpF8HfxlmO7cYxO4H/uNB0XxOtpk7SJzXPNc21DAppd6hvJ3GlHUL6hTQVBHh596tlm9vT2qqKQX+tWEaoImKBfr7rKSMilyCTzRuo1YfJ5oErnFBOtyKtvhfXqrAtgARVLIzRljVsvEUHWdZ4u2JtVg/pHaqRrtZ8Ry7cmkaalmOTXl65FAVrClb2EWORVeu3GJyTUttmigdWxW1xMVGhrZmxQBXWrw2xFMrenVsd611HSXGV4oNtCkKMUH1JaY6JCBBxQnUEzQLSo21rpx5xHNSMmKiR9rA0Fk01wqaj190k5oXTXy7AU112mAQn2J/KgqOlXdcX+Jh8+Zpm9+HJUMuYgkTgyR+JNK9FbLOoAJJ7Dmmept2w5hmUzkFJzwB+8Cf1oN7N9WdWIZFBGN0kDA5A+WIofW2CDKEMpOIIkGSQrCZn5+9RW5jnuSew4FYl7bECIIbHtMRQbXUZQNxjEDaMEEZn070ExLct+tEXr+7BIyZ4PMRkdz7mobZXd5hjHvGRJgHOJoJbGmfDKR3IIIxAOY7d/wp3/APGSGbcS7DcpJhxj+HEE9onNC9McZZASYCwzkbVM+XEmPKPw4Eiotbc2kstyGaCypJVjH2sk+XJx+VAPqFcHa7mZEjzDnM5A/CmPTryqYVV92JOOOInOKXWNMzmRwJJJljMH7pySY/I020OqtopBg/mTOYHaOfT6UFj018Qp2ge5BPz9RR1oW2AMpPYbiSDHpikQ1KlQUUgZMBcdiSO0ye1bE7hMgT89319RQNr6OVje0eijGfRVwBUKaIgAwe2XH/jkxkUINKftA/QSv0URk0QLbg7Z2j+JgeDkET8hHvQbJbDHHaQYAHmH8sHn2queKlCXLTA5VjOcnawIMRjvVmQFSQCGIGJxmchmggZMTnt7Cq74weUSbZRgxAYkGQBkBuTk+1AfdTkgiq71PcO9TnUOoHpA/lQmouMyzQLKnW60ZNRW+aKvqIEUEBImvN2axbLGmWm6ceTQLroNS6e0xzTK7pwRFe6axHag1s6YnipPgqPtUXaYKYiaIa0rc0Ff1wTsBQyMQIg06vadAZxWu9KAJnNTI4rQ25rESgNRoyKbW9Z5ciq+Wg1MNUcUDG5dE4oDV2yal07Sak1a0Cl0NBuM06W3I4pTqkg0DXpluM01110FInsRSXQXCwgVJqZHJoEejJDrAkzgTEn59qdLYZ3dQm1vtMWYFQm2cAYOBP8ASktwbWPs0/Q0dcZyAroPu7YVdzCDAkZIINBHqVAIEjvx649JH/uo5/24Pt7URp9PLIDnfJWHUGcSTzBIBAEc/KK01bLACpG3BnLMcTuIMHMxHagCcfOtGk1hn3rXNA80VmwqhnYkEZElQ5jIAiYEwGHeea2vaK1Ie2QF4AcEjd2gk8cQe89uAjJJgGTHEzgegrf4x27Z8szEd/Y8jk4oGmj6od8OGg8hQvpkQRx35/GjdD0t2KlVMPuKwQJRGhmknESAZj3qvWsEEiYzwPpg4I9qYdO6iUuI+4qyMCGHCy0tIA4ieMxigsViwykyhMTuncWEfT0n2zRVtkYBRzJlpxjIM/Occ0n8U6y2br3LBWLhD7kVrbBidzESZyVnPG41D0nqgVSbruSzHazM5BgLInPf19aC4KyAbJIaDAAEmAOBwYmhbzEECVEE/L2lY+WffvVb6l1e45lFdFAwyXJURJJJUEAn51t0jrRyDAcggO7bmbd90mOcc+9A/wBHqmLwShPmCgMOMH7o9qrHiq3DIwLQ+4gNOADEicwZ75xRugvpbfcpJdiQSSYUAR6me2TPP4hdX899FkkEjmZjvz/zFA1t9NlRPYD+VLup2wixTtnjvSfrABH0oK4ommFizIoSykmmSWyODNB5btxzUw1LcVGtli2eKNTT8UGqIYmolvZiir2BFK3Vg09qBlbic0TqGULzSu1fzFb3LDOMGgGuXt0iaBdDPepb2lZDmp7d0RQFisCVoDRNlSaAS8kVGgmmN7TY9a0saY0G+iEHNFXoPevLekME0h1+qdXgUFgCjbiq/wBQXNFaTVMVzQesuTQF9HiKn6gwNC9OgLzFeapx60Ad9PMp7N5fr2on9mLIIHmB2kEHEA55jPy7c9qBcbjE/wDurB0x0dNzciFuCJhhlLkfT6wR3oIdPpA6qHBLBfJBbcFnhV7ge3E0Pb04fyADcFYAKpBJBWCR945J+napNTrlVtj7sRO0DPockTIIz6RQFnVIt4XArFQZ2yJ4j7We+eKDVtI6TvUgQSOI7cMAQflW37MVUMxSM+VXQsQIkiJE5GOfbvTO74glDbFoBSpWC5wDgbcYx24/Cl9m+VtuotrtMBnIYtyPLvBAHHAFADcfJgmJxMcdpjvUdFG4AJC44BCiJ9JI5qI6hvX8zQeorDO0n5gwfn7V6LRMzj0yI+WTNa7yeM+sD9a3UEHtx3yJPy/nQXbpXT7N7TputqTtCsQvmlPKfMM9ufeq/wCJ+m27HwwnfeT5p42R8uTT7w1e/wAOgk43DBifMTj8aJ1/T0ujzCfmZP49qDn1h9pmSvOVMHj1H0phpdWh+3JMYKpb3T6mUJb8aYazw0RlTHscj8eR+dAWumuFbdtBAJAZZ3AAzDDI4oCNNd3bbakkPyAQFBKQzBR8gfoK8J3X2YcINo+ff9RRWjtLYsNqCsO4+HaWZkn7Tgcxj3496T2yyD55PzoGj3X9aF1xMc0OmrLGKl1inbQApM4ptp5UgtS/Q/bmm+oTcJoN3vAnFSvrUUUDph7GsvW1JoN7mpmpEcN2oJ3VcVuj4xQSvZFTWGIFRJJ7VOFxQC65pFI3bNMOouRils0FhLg1hvEcUpbXHsKibVMaB0NYe5ogdSUVWTcPrWQTQWV+vKBApDqtTvaai+EajNBKL5rUuTWgr2gkR24FbtbfvUugUlqa3UIExQIIMx3plYsva/vIJUiGH8J70NpU33Ku2m0wCQRyIoFp6Ot+2t1SXCgxBALASQhJ4IP86Q3NKv7RsVSFkQrSDlZIM5B+dObN59G5ZButE+dOdo9R/Wm97QWNSV1FlgGH2ucwICsozxjFAre0URwrKFKncFAAkj1KmZHocx24K/pOoX4Wxpzu4yNvPmX5gZx8636rqri+R0yQc52MuZ2gEyI98e2aX6bSu6zuAXJA4BjmABE/nxQa27gVChbdOSBwsejTGfka1e0wBbaIgHJkkcDmaM0ek3WCQBJnMLiD94kTEA8UybTqUVGWcAdvuj1XigQtp38siZMczHr8qmtaJ5mMHHI/kJNWHS6QfT0x/PvR6WFHAA+lAq6XYdEC9hP5kn9abo7eteog/wCCpRb9h+VBqXJqE6VHlrkKieZ2OMDt8z+tS33CAszBVGWJ7f7+3ek2ouNqIEFdOpkDhrp/eb2/570CXrPUjeuBgNqL5ba9lUcGPUx+Q9K2014ONp5r3UgbyI+VDfC2maDyzpjvgcUd1BIUUPptVBmidVcV1oALN1Vpz0+4Hqt3Ein3hsUDgaUATFBX9KDxTi84ilrWyTigrWv07A9yK90SP6GrJe0kiSKhVAoiKCKyuOK8cH0qYXY7VICpoEOr0pJob9kNWg2FNA3LOaBAtk1MulqT4maImgitaZe9FCwnatFAqPIMzQS3tMYpPcGacX7520nYZoPVqZsjFaIg70Ut1FHFBpprpXtTc60FIMUke/JxWjM1ARpboR91OH8QHhRNV+wm4waZ29Oo7UHl3VXHMxFD6C/cR5tttb0+63sRTAZwBQKaZg80DkdYDApdXaSIZW+w3aQe3zFS2dPbC7VLLknbulYPowyPzoa/ZFxdrc9j3B7RSe9av6cgEOk8SCAfcA0FnTRYJX6BBukz3Hbv27V7a0+3lY+Yiq9a664wQrD3EH34MUSviL1Rh8n/AKAUFiWO0V6WI5x9Iqsv10dlf6v/ALVA/Wm7KB8yT/SgtbaoDvPyzQV7qh3bUDM37qZb/U3CilPTdPcvnc7MEHYeXd7CO3qas+ntKi7UUKPb9fWgAt9NLQ9/MZW2D5F7+b95vX9anvPRD3KA1DUAGq0kktS7VNKkCnZJIilr6SAaBJaYzRTggVHYTzxR+uSFoFu/1phoNeEpXurYUFmXqQb2oq3cxgzVQBIqe1rXXvQWtdUeIrYkVXrXVfWmen6ijCDQT6llApc13OKOvBGGDQDjbQFaZye9EFBS1W9KL2N70FfBzRoiKXICTijBb9TQeNc9BWQTzitXvqvFDPqCaAp3AFCO9aEGtKCREJ4oux04nmjunW12iimEcUENjQoozUWuRduBTIKIk0LetgigSaNfNTu0ooNLIBxRA3UBC281uEk4GTge57Vqk048P6Pfc3HhM/6vu/1+lA20WlWwkgA3CPM3JE9lPYfzqv8AiC+pWGG8E9+3uPQ5q1aqwT8qrfVtEWBB/wCe1BRrtqMjj86io9dMzN8NVLPO0Acn39hHftVp0HgBmE3Lm0nso/UjP4Cgplm2XZVXliFE+pMDNWDS9AVT/eHcR93IH17n8qcXvAVxGV7b7tpDQe8GeRx+FG2NxGy4mR6/aHyP/BQCpgQBAHHtUm6ttRY2ZBlTwe49jUReg0c0JfaiXehL7UENi5mtddcNa2Tmp9SRtzQKEsS0iveoviKzT6iGituqCVkUCU0w0VmRJoA000I8tBFdselQnTt6UzVPWpraj0oETIRzWoNPrulRqEu9MPIoAU1TDvU6a31qC7p2XkVDQOtNqkmnCaxI5qmzW3xW9aCZrwHFRPdJ71lZQaCtkGa8rKAq4y7cUFWVlAz0zkLzRKamsrKCQ35xUhPlrKyghRDRFsVlZQFIkwAM9vnV76RoPhWwpHmOW/zH9AMfSsrKAi4lK+p2RtJrKygg6B0pEBvEDfc49kHA+vJ+npVlR6ysoCFelHVtKGMgZGcfnWVlBXNfgCgHavKyggdqGuvWVlB5ph3qDX3MGsrKBEjeairl2RBrKygCZKcdLt4E1lZQNbmnBFRpp45rKygiZPNzRS3gOaysoILyK1LdRogeKysoF1zTsO1RRXtZQf/Z" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NoteScreen;